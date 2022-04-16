import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import RouterMain from './RouterMain.vue';
import { routes } from '@/router';

describe('Vue Router', () => {
  let wrapper;

  describe('real router', () => {
    let router: any;
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    beforeEach(() => {
      router = new VueRouter({ routes });
    });
    it('router push', async () => {
      wrapper = shallowMount(RouterMain, {
        localVue,
        router,
      });

      await router.push({ name: 'About' });
      expect(wrapper.vm.$route.path).toBe('/about');
    });
  });
});
