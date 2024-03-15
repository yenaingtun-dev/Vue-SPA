<template>
    <form @submit.prevent="signIn" action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <div v-if="errors.errorMessage" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
            <strong class="text-sm font-medium text-red-800"> {{ errors.errorMessage }} </strong>
        </div>
        <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
                <input type="email" v-model="user.email" class="w-full rounded-lg
                border-gray-200 p-4 pe-12 text-sm shadow-sm" :class="{ 'border-red-500': errors.email }"
                    placeholder="Enter email" />
                <div v-if="errors.email">
                    <strong class="text-sm font-medium text-red-800"> {{ errors.email }} </strong>
                </div>
            </div>
        </div>
        <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
                <input type="password" v-model="user.password"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    :class="{ 'border-red-500': errors.password }" placeholder="Enter password" />
                <div v-if="errors.password">
                    <strong class="text-sm font-medium text-red-800"> {{ errors.password }} </strong>
                </div>
            </div>
        </div>
        <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Sign in
        </button>
        <p class="text-center text-sm text-gray-500">
            No account?
            <a class="underline" href="#">Sign up</a>
        </p>
    </form>
</template>

<script>
export default {
    props: {
        errors: Object
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signIn() {
            this.$emit('signIn', this.user);
            // this.user.email = '';
            // this.user.password = '';
        }
    },
};
</script>