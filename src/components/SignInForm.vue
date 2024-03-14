<template>
    <form @submit.prevent="signIn" action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
                <input type="email" v-model="user.email" class="w-full rounded-lg b
                    order-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
            </div>
        </div>
        <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
                <input type="password" v-model="user.password"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password" />
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