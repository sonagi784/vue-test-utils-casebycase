import { shallowMount } from '@vue/test-utils';
import Methods from './Methods.vue';
import MethodsClassComp from './MethodsClassComp.vue';

describe('Methods.vue', () => {
  it('method mocks in Object component', async () => {
    const spy = jest.spyOn(Methods.methods, 'onClickMethod');
    const wrapper = shallowMount(Methods);
    await wrapper.find('button').trigger('click');
    expect(spy).toBeCalled();
  });

  it('method mocks in Class component', async () => {
    const spy = jest.spyOn(
      MethodsClassComp.prototype.constructor.options.methods,
      'onClickMethod'
    );
    const wrapper = shallowMount(MethodsClassComp);
    await wrapper.find('button').trigger('click');
    expect(spy).toBeCalled();
  });
});
