<template>
    <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
            <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Post Create Form</h1>
            <form @submit.prevent="postCreate" action="#"
                class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <div v-if="networkError" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
                    <strong class="text-sm font-medium text-red-800"> {{ networkError }} </strong>
                </div>
                <div v-if="message" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
                    <strong class="text-sm font-medium text-red-800"> {{ message }} </strong>
                </div>
                <div class="relative">
                    <input v-model="post.title" type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        :class="{ 'border-red-500': errors?.title }" placeholder="Enter post title" />
                    <div v-if="errors?.title">
                        <strong class="text-sm font-medium text-red-800"> {{ errors?.title[0] }} </strong>
                    </div>
                </div>
                <div class="relative">
                    <textarea v-model="post.description" type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        :class="{ 'border-red-500': errors?.description }" placeholder="Enter post description" />
                    <div v-if="errors?.description">
                        <strong class="text-sm font-medium text-red-800"> {{ errors?.description[0] }} </strong>
                    </div>
                </div>
                <!-- <button type="submit"
                    class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    :disabled="loading">
                    <svg v-if="loading" class="animate-spin w-10 h-8 mx-auto loading-svg" version="1.1" id="L9"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                        <path fill="#fff"
                            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        </path>
                    </svg>
                    <span v-if="!loading">Create</span>
                </button> -->
                <div class="bg-gray-50 py-3 sm:flex sm:flex-row-reverse ">
                    <button type="submit" :disabled="loading"
                        class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                        <svg v-if="loading" class="animate-spin w-10 h-8 mx-auto loading-svg" version="1.1" id="L9"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                            <path fill="#fff"
                                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            </path>
                        </svg>
                        <span v-if="!loading">Create</span>
                    </button>
                    <button type="button" @click="this.$router.push('/dashboard')"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            post: {
                title: '',
                description: ''
            },
            loading: false,
            token: localStorage.getItem('bearerToken'),
            errors: {}
        }
    },
    methods: {
        async postCreate() {
            this.loading = true;
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`, proxy: false }
                };
                let response = await axios.post(`http://127.0.0.1:8000/api/posts`, {
                    title: this.post.title,
                    description: this.post.description,
                }, config);
                this.success = response.data.message;
                this.post.title = '';
                this.post.description = '';
                this.errors.message = '';
                this.$router.push('/dashboard');
            } catch (e) {
                if (typeof e.response !== 'undefined') {
                    this.errors = e.response.data.message;
                } else {
                    this.networkError = e.message;
                }
            } finally {
                this.loading = false;
            }
        }
    },
};
</script>