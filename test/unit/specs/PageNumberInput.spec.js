// import Vue from 'vue';
import PageNumberInput from '@/components/PageNumberInput';

describe('PageNumberInput.vue', () => {
  // const Constructor = Vue.extend(PageNumberInput);

  it('should have name page-number-input', () => {
    expect(PageNumberInput.name).to.equal('page-number-input');
  });

  it('should have default props', () => {
    const props = PageNumberInput.props;

    expect(props.inputClass.default()).to.equal('input');
    expect(props.inputPlaceholder.default()).to.equal('');
    expect(props.inputValue.default()).to.equal(0);
  });

  it('should have update', () => {
    expect(typeof PageNumberInput.methods.update, 'function');
  });
});
