import { shallowMount } from '@vue/test-utils';
import Class from './Class.vue';
import ClassWithModules from './ClassWithModules.vue';
import Modules from './Modules.vue';
import Basic from './Basic.vue';

describe('Vuex', () => {
  let wrapper;

  it('basic', () => {
    wrapper = shallowMount(Basic);
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
