<template>
  <div>
    <input type="text" v-model="password" />
    <span class="check" v-if="isCorrectPassword">correct password!</span>
    <span class="check" v-else>wrong password!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      correctPassword: 'abcd',
    };
  },

  computed: {
    isCorrectPassword() {
      return this.password === this.correctPassword;
    },
  },
};
</script>
