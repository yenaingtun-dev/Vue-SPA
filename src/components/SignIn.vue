<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">{{ formName }}</h1>
      <SignInForm @signIn="signIn"></SignInForm>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SignInForm from './SignInForm.vue';
export default {
  components: {
    'SignInForm': SignInForm,
  },
  props: ['formName'],
  methods: {
    async signIn(user) {
      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: user.email,
          password: user.password
        });
        console.log(response.data.message);
        localStorage.setItem('token', response.data.accessToken);
      } catch (e) {
        console.log(e.response.data.message);
      }
    },
  },
}
</script>