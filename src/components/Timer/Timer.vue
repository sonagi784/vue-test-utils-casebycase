<template>
  <div>
    <span v-if="threeSec">hello!</span>
    <span v-else>please wait 3 seconds</span>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      threeSec: false,
    };
  },
  created() {
    setTimeout(() => {
      this.threeSec = true;
    }, 3000);
  },
};
</script>
