<template>
  <div>
    <h1>Debounce input below</h1>
    <div class="text">{{ myText }}</div>
    <input :value="myText" @input="onInput" />
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  data() {
    return {
      myText: '',
    };
  },

  methods: {
    onInput: debounce(function (e) {
      this.myText += e.target.value;
    }, 1000),
  },
};
</script>
