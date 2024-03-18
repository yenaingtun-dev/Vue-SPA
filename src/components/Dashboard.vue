<template>
    <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
            <h1 class="text-center text-2xl font-bold text-teal-500 mb-3 sm:text-3xl">Dashboard Posts</h1>
            <div class="mb-2" v-for="post in posts">
                <article
                    class="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                    <a href="#">
                        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                            {{ post.title }}
                        </h3>
                    </a>
                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {{ post.description }}
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            posts: [],
            token: localStorage.getItem('bearerToken'),
        }
    },
    mounted() {
        try {
            const config = {
                headers: { Authorization: `Bearer ${this.token}`, proxy: false }
            };
            axios.get(`http://127.0.0.1:8000/api/posts`, config)
                .then(response => {
                    // this.posts = JSON.stringify(response.data.data);
                    this.posts = Object.values(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } catch (e) {
            this.errors = e.response.data.errors;
        }
    }
}
</script>