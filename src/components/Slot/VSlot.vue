<template>
  <SlotComponent>
    <span>v-slot</span>
  </SlotComponent>
</template>

<script>
import SlotComponent from './SlotComponent.vue';
export default {
  components: {
    SlotComponent,
  },
};
</script>
