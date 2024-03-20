<template>
    <header class="bg-gray-800">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 text-gray-200 px-4 sm:px-6 lg:px-8">
            <a class="block hover:text-teal-600/75" href="#">
                <RouterLink :class="{ 'text-teal-300': $route.name == 'home' }" to="/">Home</RouterLink>
            </a>
            <div class="flex flex-1 items-center justify-end  md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <RouterLink v-if="isLoggedIn" to="/dashboard"
                                class="cursor-pointer transition  hover:text-teal-600/75"
                                :class="{ 'text-teal-300': $route.name == 'dashboard' }">
                                Dashboard </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <a v-if="isLoggedIn" @click="logout"
                            class="block rounded-md bg-teal-600 px-5 py-2.5 cursor-pointer text-sm font-medium  transition hover:bg-teal-700">Logout</a>
                        <RouterLink v-if="!isLoggedIn"
                            class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium  transition hover:bg-teal-700"
                            to="/signin">SignIn</RouterLink>
                        <RouterLink v-if="!isLoggedIn"
                            class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75"
                            to="/register">Register</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            token: localStorage.getItem('bearerToken')
        }
    },
    mounted() {
        this.checkLoginStatus();
    },
    computed: {
        localStorageItemExists() {
            // hide login register
            return localStorage.getItem('bearerToken') !== null;
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("bearerToken");
            this.$router.push('/signin');
        },
        checkLoginStatus() {
            if (this.localStorageItemExists) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        }
    },
};
</script>