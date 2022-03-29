<template>
  <div>
    <h1>Events</h1>
    <button @click="emitEvent">emit Event!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emitData: 123,
    };
  },

  methods: {
    emitEvent() {
      this.$emit('Event');
      this.$emit('EventWithData', this.emitData);
    },
  },
};
</script>
