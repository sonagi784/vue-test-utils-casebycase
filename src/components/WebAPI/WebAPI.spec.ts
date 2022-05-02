import { shallowMount } from '@vue/test-utils';
import WebAPI from './WebAPI.vue';

describe('WebAPI.vue', () => {
  const mockReload = jest.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { reload: mockReload },
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('location.reload', async () => {
    const wrapper = shallowMount(WebAPI);
    await wrapper.find('button').trigger('click');
    expect(mockReload).toBeCalled();
  });
});
