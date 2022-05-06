import { shallowMount } from '@vue/test-utils';
import Debounce from './Debounce.vue';
import { advanceBy } from 'jest-date-mock';

jest.useFakeTimers();

describe('Debounce', () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllTimers();
  });

  describe('Debounce test (jest <= 26)', () => {
    it('only allow last input during debounce time', async () => {
      wrapper = shallowMount(Debounce);
      const inputElement = wrapper.find('input');
      const textElement = wrapper.find('.text');
      inputElement.setValue('a');
      inputElement.setValue('b');
      inputElement.setValue('c');
      inputElement.setValue('d');
      await wrapper.vm.$nextTick();

      expect(textElement.text()).toBe('');

      advanceBy(1000);
      await jest.advanceTimersByTime(1000);

      expect(textElement.text()).toBe('d');
    });
  });
});
