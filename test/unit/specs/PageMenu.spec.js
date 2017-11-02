import Vue from 'vue';
import PageMenu from '@/components/PageMenu';

describe('PageMenu.vue', () => {
  const Constructor = Vue.extend(PageMenu);

  it('should have name page-menu', () => {
    expect(PageMenu.name).to.equal('page-menu');
  });

  it('should have default props', () => {
    const props = PageMenu.props;

    expect(props.brandName.default()).to.equal('Vuethexplore');
    expect(props.items.default()).to.deep.equal([]);
  });

  it('should have default data', () => {
    const data = PageMenu.data();

    expect(data.isMenuActive).to.equal(false);
  });

  it('should have computed itemsValid', () => {
    expect(typeof PageMenu.computed.itemsValid).to.equal('function');
  });

  it('should have method toggleMenu', () => {
    expect(typeof PageMenu.methods.toggleMenu).to.equal('function');
  });

  it('shouldn\'t render contents', () => {
    const vm = new Constructor({
      template: 'page-menu',
    }).$mount();

    expect(vm.$el.querySelector('#page-navbar').style.display).to.equal('none');
  });

  it('should render contents', () => {
    const vm = new Constructor({
      template: 'page-menu',
      propsData: {
        menuItems: [
          {
            text: 'index',
            to: '/',
          },
        ],
      },
    }).$mount();
    const items = vm.$el.querySelectorAll('.navbar-start .navbar-item');

    expect(items.length).to.equal(1);
    expect(items[0].textContent).to.equal('index');
  });
});
