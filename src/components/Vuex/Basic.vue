<template>
  <div>
    <h1>Basic (hello user)</h1>
    <div class="hello">{{ PRINT_HELLO }}</div>
    <button class="plus" @click="PLUS_NUMBER">plus 1</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      PRINT_HELLO: 'print_hello',
    }),
  },

  methods: {
    ...mapActions({
      PLUS_NUMBER: 'plusNumber',
    }),
  },
};
</script>
