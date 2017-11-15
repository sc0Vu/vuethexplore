// import Vue from 'vue';
import PageNotifications from '@/components/PageNotifications';

describe('PageNotifications.vue', () => {
  // const Constructor = Vue.extend(PageNotifications);

  it('should have name page-notifications', () => {
    expect(PageNotifications.name).to.equal('page-notifications');
  });

  it('should have default props', () => {
    const props = PageNotifications.props;

    expect(props.notifications.default()).to.deep.equal([]);
  });

  it('should have method remove', () => {
    expect(typeof PageNotifications.methods.remove).to.equal('function');
  });
});
