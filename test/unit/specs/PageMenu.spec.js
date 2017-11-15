// import Vue from 'vue';
import PageMenu from '@/components/PageMenu';

describe('PageMenu.vue', () => {
  // const Constructor = Vue.extend(PageMenu);

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
});
