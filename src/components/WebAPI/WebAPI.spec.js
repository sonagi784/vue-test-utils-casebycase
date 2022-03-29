import { shallowMount } from '@vue/test-utils';
import WebAPI from './WebAPI.vue';

describe('WebAPI.vue', () => {
  it('', () => {
    const wrapper = shallowMount(WebAPI);
    expect(wrapper.exists()).toBeTruthy();
  });
});
