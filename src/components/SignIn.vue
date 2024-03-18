<template>
  <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Sign In Form</h1>
      <div v-if="networkError" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
        <strong class="text-sm font-medium text-red-800"> {{ networkError }} </strong>
      </div>
      <div v-if="success" class="rounded border-s-4 border-green-500 bg-green-50 p-4 mt-4">
        <strong class="block font-medium text-green-800"> {{ success }} </strong>
      </div>
      <SignInForm @signIn="signIn" :errors="errors" :message="message" :loading="loading"></SignInForm>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SignInForm from './SignInForm.vue';
export default {
  data() {
    return {
      success: '',
      message: '',
      networkError: '',
      loading: false,
      errors: {}
    }
  },
  components: {
    'SignInForm': SignInForm,
  },
  methods: {
    async signIn(user) {
      this.loading = true;
      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: user.email,
          password: user.password
        });
        this.success = response.data.message;
        localStorage.setItem('bearerToken', response.data.accessToken);
        user.email = '';
        user.password = '';
        this.errors.message = '';
        this.$router.push('/');
      } catch (e) {
        if (typeof e.response !== 'undefined') {
          this.errors = e.response.data.errors;
          this.message = e.response.data.message;
        } else {
          this.networkError = e.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
}
</script>