import { shallowMount } from '@vue/test-utils';
import Timer from './Timer.vue';

jest.useFakeTimers();

const BEFORE_THREE_SECONDS = 'please wait 3 seconds';
const AFTER_THREE_SECONDS = 'hello!';

describe('Timer', () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('change in 3 seconds', async () => {
    wrapper = shallowMount(Timer);

    expect(wrapper.find('span').text()).toBe(BEFORE_THREE_SECONDS);
    await jest.advanceTimersByTime(3000);
    expect(wrapper.find('span').text()).toBe(AFTER_THREE_SECONDS);
  });
});
