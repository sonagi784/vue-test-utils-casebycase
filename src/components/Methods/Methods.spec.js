import { shallowMount } from '@vue/test-utils';
import Methods from './Methods.vue';

describe('Methods.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Methods);
    expect(wrapper.exists()).toBeTruthy();
  });
});
