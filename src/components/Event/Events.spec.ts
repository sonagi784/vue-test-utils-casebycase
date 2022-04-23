import { shallowMount } from '@vue/test-utils';
import Events from './Events.vue';

describe('Events.vue', () => {
  it('event emit', async () => {
    const wrapper = shallowMount(Events);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('Event');
  });

  it('event emit with data', async () => {
    const wrapper = shallowMount(Events);
    const emitData = 123;
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().EventWithData).toContainEqual([emitData]);
  });
});
