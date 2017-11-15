// import Vue from 'vue';
import PageDropdown from '@/components/PageDropdown';

describe('PageDropdown.vue', () => {
  // const Constructor = Vue.extend(PageDropdown);

  it('should have name page-dropdown', () => {
    expect(PageDropdown.name).to.equal('page-dropdown');
  });

  it('should have default props', () => {
    const props = PageDropdown.props;

    expect(props.buttonText.default()).to.equal('------');
    expect(props.items.default()).to.deep.equal([]);
  });

  it('should have default data', () => {
    const data = PageDropdown.data();

    expect(data.isShow).to.equal(false);
  });

  it('should have method toggleDropdown', () => {
    expect(typeof PageDropdown.methods.toggleDropdown).to.equal('function');
  });

  it('should have method itemClicked', () => {
    expect(typeof PageDropdown.methods.itemClicked).to.equal('function');
  });

  it('should have method inputChanged', () => {
    expect(typeof PageDropdown.methods.inputChanged).to.equal('function');
  });
});
