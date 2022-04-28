import { shallowMount } from '@vue/test-utils';
import VModel from './VModel.vue';

describe('v-model', () => {
  it('input correct password', async () => {
    const wrapper = shallowMount(VModel);
    const passwordInput = wrapper.find('input');

    await passwordInput.setValue('abcd');
    expect(wrapper.find('.check').text()).toMatch('correct password!');
  });

  it('input wrong password', async () => {
    const wrapper = shallowMount(VModel);
    const passwordInput = wrapper.find('input');

    await passwordInput.setValue('efgh');
    expect(wrapper.find('.check').text()).toMatch('wrong password!');
  });
});
