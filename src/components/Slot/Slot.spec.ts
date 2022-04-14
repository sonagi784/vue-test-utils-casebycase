import { shallowMount } from '@vue/test-utils';
import SlotComponent from './SlotComponent.vue';
import VSlot from './VSlot.vue';

describe('SlotComponent.spec.ts', () => {
  let wrapper;

  it('string element to slot', () => {
    wrapper = shallowMount(SlotComponent, {
      slots: {
        default: '<span>v-slot</span>',
      },
    });

    expect(wrapper.find('span').isVisible()).toBeTruthy();
    expect(wrapper.find('span').text()).toBe('v-slot');
  });

  it('component to slot', () => {
    wrapper = shallowMount(SlotComponent, {
      slots: {
        default: VSlot,
      },
    });

    expect(wrapper.find('span').isVisible()).toBeTruthy();
    expect(wrapper.find('span').text()).toBe('v-slot');
  });
});
