<template>
  <div>
    <h1>Modules (counter)</h1>
    <div class="count">count: {{ COUNT }}</div>
    <div class="getCount">getCount: {{ GET_COUNT }}</div>
    <button class="plus" @click="PLUS_COUNT">plus 1</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('counter', {
      COUNT: 'count',
    }),
    ...mapGetters('counter', {
      GET_COUNT: 'getCount',
    }),
  },

  methods: {
    ...mapActions('counter', {
      PLUS_COUNT: 'plusCount',
    }),
  },
};
</script>
