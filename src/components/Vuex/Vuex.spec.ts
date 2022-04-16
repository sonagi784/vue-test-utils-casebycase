import { shallowMount, createLocalVue } from '@vue/test-utils';
import Basic from './Basic.vue';
import Modules from './Modules.vue';
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

  afterEach(() => {
    jest.clearAllMocks();
  });

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

    it('not using modules', async () => {
      wrapper = shallowMount(Basic, {
        localVue,
        store,
      });

      expect(wrapper.find('.hello').text()).toBe('hello user! 0');
      await wrapper.find('.plus').trigger('click');
      expect(wrapper.find('.hello').text()).toBe('hello user! 1');
    });

    it('using modules', async () => {
      wrapper = shallowMount(Modules, {
        localVue,
        store,
      });

      expect(wrapper.find('.count').text()).toBe('count: 0');
      expect(wrapper.find('.getCount').text()).toBe('getCount: 0');

      await wrapper.find('.plus').trigger('click');

      expect(wrapper.find('.count').text()).toBe('count: 1');
      expect(wrapper.find('.getCount').text()).toBe('getCount: 1');
    });
  });

  describe('mock store', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('not using modules', async () => {
      const print_hello = jest.fn();
      const plusNumber = jest.fn();

      wrapper = shallowMount(Basic, {
        localVue,
        store: new Vuex.Store({
          getters: {
            print_hello,
          },
          actions: {
            plusNumber,
          },
        }),
      });

      await wrapper.find('.plus').trigger('click');
      expect(plusNumber).toBeCalled();
    });

    it('using modules', async () => {
      const plusCount = jest.fn();

      wrapper = shallowMount(Modules, {
        localVue,
        store: new Vuex.Store({
          modules: {
            counter: {
              namespaced: true,
              state: {
                count: 0,
              },
              getters: {
                getCount: () => 0,
              },
              actions: {
                plusCount,
              },
            },
          },
        }),
      });

      await wrapper.find('.plus').trigger('click');
      expect(plusCount).toBeCalled();
    });
  });
});
