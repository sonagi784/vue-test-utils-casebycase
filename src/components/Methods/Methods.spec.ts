import { shallowMount } from '@vue/test-utils';
import Methods from './Methods.vue';
import MethodsClassComp from './MethodsClassComp.vue';

describe('Methods.vue', () => {
  it('method mocks in Object component', async () => {
    const spy = jest.spyOn((Methods as any).methods, 'onClickMethod');
    const wrapper = shallowMount(Methods);
    await wrapper.find('button').trigger('click');
    expect(spy).toBeCalled();
  });

  it('method mocks in Class component', async () => {
    const spy = jest.spyOn(
      (MethodsClassComp.prototype.constructor as any).options.methods,
      'onClickMethod'
    );
    const wrapper = shallowMount(MethodsClassComp);
    await wrapper.find('button').trigger('click');
    expect(spy).toBeCalled();
  });

  it('use method option (deprecated in Vue 3)', async () => {
    const onClickMethod = jest.fn();
    const wrapper = shallowMount(Methods, {
      methods: {
        onClickMethod,
      },
    });
    await wrapper.find('button').trigger('click');
    expect(onClickMethod).toBeCalled();
  });
});
