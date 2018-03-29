import store from '@/store';
import page from '@/store/modules/page';

describe('State page', () => {
  const notification = { text: 'Hello vuethexplore!', class: 'is-primary' };

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
});
