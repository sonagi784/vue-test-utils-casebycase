<template>
  <div>
    <h1>Basic (hello user)</h1>
    <div>{{ printHello }}</div>
    <button @click="plusNumber">plus 1</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      printHello: 'print_hello',
    }),
  },

  methods: {
    ...mapActions({
      plusNumber: 'plusNumber',
    }),
  },
};
</script>
