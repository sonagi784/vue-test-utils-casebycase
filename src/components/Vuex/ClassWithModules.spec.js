import { shallowMount } from '@vue/test-utils';
import ClassWithModules from './ClassWithModules.vue';

describe('ClassWithModules.vue', () => {
  it('', () => {
    const wrapper = shallowMount(ClassWithModules);
    expect(wrapper.exists()).toBeTruthy();
  });
});
