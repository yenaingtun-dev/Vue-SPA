<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
      <SignInForm></SignInForm>
    </div>
  </div>
</template>

<script>
import SignInForm from './SignInForm.vue'
export default {
  components: {
    'SignInForm': SignInForm,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>