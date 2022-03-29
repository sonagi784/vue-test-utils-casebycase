import { shallowMount } from '@vue/test-utils';
import Events from './Events.vue';

describe('Events.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Events);
    expect(wrapper.exists()).toBeTruthy();
  });
});
