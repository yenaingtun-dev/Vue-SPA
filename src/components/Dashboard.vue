<template>
    <div class="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
            <h1 class="text-center text-2xl font-bold text-teal-500 mb-3 sm:text-3xl">Dashboard Posts</h1>
            <Posts :posts="posts"></Posts>
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