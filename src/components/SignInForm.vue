<template>
    <form @submit.prevent="onSubmit" action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <p class="text-center text-lg font-medium">Sign in to your account</p>
        <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
                <input type="email" v-model="email"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
            </div>
        </div>
        <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
                <input type="password" v-model="password"
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
    <p>Email is: {{ email }} and password is {{ password }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {

    }
};
</script>