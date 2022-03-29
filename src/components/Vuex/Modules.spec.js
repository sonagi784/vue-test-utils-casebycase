import { shallowMount } from '@vue/test-utils';
import Modules from './Modules.vue';

describe('Modules.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Modules);
    expect(wrapper.exists()).toBeTruthy();
  });
});
