import { shallowMount } from '@vue/test-utils';
import WebAPI from './WebAPI.vue';

describe('WebAPI.vue', () => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { reload: jest.fn() },
  });

  it('location.reload', async () => {
    const wrapper = shallowMount(WebAPI);
    await wrapper.find('button').trigger('click');
    expect(window.location.reload).toBeCalled();
  });
});
