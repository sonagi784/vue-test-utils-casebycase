import { shallowMount } from '@vue/test-utils';
import Class from './Class.vue';

describe('Class.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Class);
    expect(wrapper.exists()).toBeTruthy();
  });
});
