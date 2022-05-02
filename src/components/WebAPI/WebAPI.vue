<template>
  <div>
    <h1>WebAPI</h1>
    <button @click="onClick">reload</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      location.reload();
    },
  },
};
</script>
