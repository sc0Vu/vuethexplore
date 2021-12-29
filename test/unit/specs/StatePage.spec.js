import store from '@/store';
import page from '@/store/modules/page';

describe('State page', () => {
  const notification = { text: 'Hello vuethexplorer!', class: 'is-primary' };

  it('should notify notification', () => {
    page.mutations.notify(store.state.page, notification);

    expect(store.getters.hasNotifications).to.equal(true);
    expect(store.state.page.notifications[0]).deep.equal(notification);
  });

  it('should remove notification', () => {
    page.mutations.removeNotification(store.state.page, 0);

    expect(store.getters.hasNotifications).to.equal(false);
    expect(store.state.page.notifications).deep.equal([]);
  });

  it('should set loading to false', () => {
    expect(store.state.page.loading).to.equal(true);

    page.mutations.setLoading(store.state.page, false);

    expect(store.state.page.loading).to.equal(false);
  });

  it('should set autoRemove to false', () => {
    expect(store.state.page.autoRemove).to.equal(true);

    page.mutations.setAutoRemove(store.state.page, false);

    expect(store.state.page.autoRemove).to.equal(false);
  });

  it('should set timeout to 1000', () => {
    // default is 2000
    expect(store.state.page.timeout).to.equal(2000);

    page.mutations.setTimeout(store.state.page, 1500);

    expect(store.state.page.timeout).to.equal(1500);
  });
});
