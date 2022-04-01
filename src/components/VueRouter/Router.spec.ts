import { shallowMount } from '@vue/test-utils';
import Router from './Router.vue';
import Mock from './Mock.vue';

describe('Vue Router', () => {
  let wrapper;

  it('Router.vue', () => {
    wrapper = shallowMount(Router);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Mock.vue', () => {
    const wrapper = shallowMount(Mock);
    expect(wrapper.exists()).toBeTruthy();
  });
});
