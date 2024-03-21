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
            <div v-if="!loading" class="inline-flex items-center justify-center rounded bg-teal-500 py-1 text-white">
                <a href="#" @click="prevPage" :disabled="currentPage === 1"
                    class="inline-flex size-8 items-center justify-center rtl:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <span class="h-4 w-px bg-white/25" aria-hidden="true"></span>
                <div>
                    <input type="number" v-model="currentPage"
                        class="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        min="1" id="PaginationPage" />
                </div>
                <span class="h-4 w-px bg-white/25"></span>
                <a href="#" @click="nextPage" :disabled="currentPage === totalPages"
                    class="inline-flex size-8 items-center justify-center rtl:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
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
            currentPage: 1,
            totalPages: 1,
        }
    },
    mounted() {
        this.getPosts(this.currentPage);
    },
    methods: {
        async getPosts(page) {
            this.loading = true;
            try {
                const config = {
                    headers: { Authorization: `Bearer ${this.token}`, proxy: false }
                };
                await axios.get(`http://127.0.0.1:8000/api/posts?page=${page}`, config)
                    .then(response => {
                        this.posts = Object.values(response.data.data.data);
                        this.currentPage = response.data.data.current_page;
                        this.totalPages = response.data.data.last_page;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } catch (e) {
                this.errors = e.response.data.errors;
            } finally {
                this.loading = false;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.getPosts(this.currentPage + 1);
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.getPosts(this.currentPage - 1);
            }
        }
    }
}
</script>