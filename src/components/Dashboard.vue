<template>
    <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
            <div class="flex items-center justify-between">
                <h1 class="text-center text-2xl font-bold text-teal-500 mb-3 sm:text-3xl">Dashboard Posts</h1>
                <RouterLink to="/post-create" class="hover:underline">create</RouterLink>
            </div>
            <svg v-if="loading" class="animate-spin w-10 h-8 mx-auto loading-svg" version="1.1" id="L9"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                <path fill="black"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                </path>
            </svg>
            <Posts v-if="!loading" :posts="posts"></Posts>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Posts from './Posts.vue';
export default {
    components: {
        'Posts': Posts
    },
    data() {
        return {
            posts: [],
            token: localStorage.getItem('bearerToken'),
            loading: false,
        }
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            this.loading = true;
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`, proxy: false }
                };
                await axios.get(`http://127.0.0.1:8000/api/posts`, config)
                    .then(response => {
                        this.posts = Object.values(response.data.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } catch (e) {
                this.errors = e.response.data.errors;
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>