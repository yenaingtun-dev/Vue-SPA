<template>
  <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Sign In Form</h1>
      <div v-if="success" class="rounded border-s-4 border-green-500 bg-green-50 p-4 mt-4">
        <strong class="block font-medium text-green-800"> {{ success }} </strong>
      </div>
      <SignInForm @signIn="signIn" :errors="errors"></SignInForm>
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
      errors: {}
    }
  },
  components: {
    'SignInForm': SignInForm,
  },
  methods: {
    async signIn(user) {
      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: user.email,
          password: user.password
        });
        this.success = response.data.message;
        localStorage.setItem('bearerToken', response.data.accessToken);
        user.email = '';
        user.password = '';
        this.errors.errorMessage = '';
        this.$router.push('/')
      } catch (e) {
        if (e.response.data.errors.hasOwnProperty('email') && e.response.data.errors.hasOwnProperty('password')) {
          this.errors.email = e.response.data.errors.email[0];
          this.errors.password = e.response.data.errors.password[0];
          this.errors.errorMessage = '';
        } else if (e.response.data.errors.hasOwnProperty('password')) {
          this.errors.password = e.response.data.errors.password[0];
          this.errors.email = '';
          this.errors.errorMessage = '';
        } else if (e.response.data.errors.hasOwnProperty('email')) {
          this.errors.email = e.response.data.errors.email[0];
          this.errors.password = '';
          this.errors.errorMessage = '';
        } else if (e.response.data.errors == '' && e.response.data.message == "user did not exitst") {
          this.errors.errorMessage = e.response.data.message;
          this.errors.email = '';
          this.errors.password = '';
        } else {
          this.errors.email = '';
          this.errors.password = '';
          this.errors.errorMessage = '';
        }
      }
    },
  },
}
</script>