<template>
    <form @submit.prevent="register" action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <div v-if="errors?.message" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
            <strong class="text-sm font-medium text-red-800"> {{ errors?.message }} </strong>
        </div>
        <div>
            <div class="relative">
                <input type="text" v-model="user.name" class="w-full rounded-lg
                border-gray-200 p-4 pe-12 text-sm shadow-sm" :class="{ 'border-red-500': errors?.name }"
                    placeholder="Enter name" />
                <div v-if="errors?.name">
                    <strong class="text-sm font-medium text-red-800"> {{ errors?.name[0] }} </strong>
                </div>
            </div>
        </div>
        <div>
            <div class="relative">
                <input type="email" v-model="user.email" class="w-full rounded-lg
                border-gray-200 p-4 pe-12 text-sm shadow-sm" :class="{ 'border-red-500': errors?.email }"
                    placeholder="Enter email" />
                <div v-if="errors?.email">
                    <strong class="text-sm font-medium text-red-800"> {{ errors?.email[0] }} </strong>
                </div>
            </div>
        </div>
        <div>
            <div class="relative">
                <input type="password" v-model="user.password"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    :class="{ 'border-red-500': errors?.password }" placeholder="Enter password" />
                <div v-if="errors?.password">
                    <strong class="text-sm font-medium text-red-800"> {{ errors?.password[0] }} </strong>
                </div>
            </div>
        </div>
        <div>
            <div class="relative">
                <input type="password" v-model="user.password_confirmation"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    :class="{ 'border-red-500': errors?.password_confirmation }" placeholder="Confirm password" />
                <div v-if="errors?.password_confirmation">
                    <strong class="text-sm font-medium text-red-800"> {{ errors?.password_confirmation[0] }} </strong>
                </div>
            </div>
        </div>
        <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Register
        </button>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        register() {
            this.$emit('register', this.user);
        }
    },
};
</script>