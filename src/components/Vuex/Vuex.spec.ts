import { shallowMount, createLocalVue } from '@vue/test-utils';
import Basic from './Basic.vue';
import Vuex from 'vuex';
import state from '@/store/state';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import modules from '@/store/modules';

describe('Vuex', () => {
  let wrapper, store: any;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  describe('real store', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        modules,
      });
    });

    it('not using modules', () => {
      wrapper = shallowMount(Basic, {
        localVue,
        store,
      });

      expect(wrapper.exists()).toBeTruthy();
    });

    it('using modules', () => {
      wrapper = shallowMount(Basic, {
        localVue,
        store,
      });

      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('mock store', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state: {},
        getters: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    });

    it('not using modules', () => {
      expect(1).toBe(1);
    });

    it('using modules', () => {
      expect(1).toBe(1);
    });
  });
});
