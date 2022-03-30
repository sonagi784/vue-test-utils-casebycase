<template>
  <div>
    <h1>Methods</h1>
    <button @click="onClickMethod">method button</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MethodsClassComp extends Vue {
  onClickMethod() {
    return;
  }
}
</script>
