import { shallowMount } from '@vue/test-utils';
import Normal from './Normal.vue';

describe('Normal.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Normal);
    expect(wrapper.exists()).toBeTruthy();
  });
});
