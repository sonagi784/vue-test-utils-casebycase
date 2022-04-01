import { shallowMount } from '@vue/test-utils';
import Class from './Class.vue';
import ClassWithModules from './ClassWithModules.vue';
import Modules from './Modules.vue';
import Normal from './Normal.vue';

describe('Class.vue', () => {
  let wrapper;

  it('normal', () => {
    wrapper = shallowMount(Normal);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('modules', () => {
    wrapper = shallowMount(Modules);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('class', () => {
    wrapper = shallowMount(Class);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('class with modules', () => {
    wrapper = shallowMount(ClassWithModules);
    expect(wrapper.exists()).toBeTruthy();
  });
});
