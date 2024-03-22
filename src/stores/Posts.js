import { defineStore } from "pinia";
import axios from 'axios';

export const fetchAPI = defineStore("getPosts", {
  state() {
    return {
      posts: [],
      token: localStorage.getItem("bearerToken"),
      loading: false,
      currentPage: 1,
      totalPages: 1,
    };
  },

  actions: {
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
  },

});
