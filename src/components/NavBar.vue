<template>
    <header class="bg-gray-800">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a class="bloc text-white hover:text-teal-600/75" href="#">
                <RouterLink class="" to="/">Home</RouterLink>
            </a>
            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <a v-if="localStorageItemExists" class="text-gray-500 transition hover:text-gray-500/75"
                                href="#"> Dashboard </a>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <RouterLink v-if="!localStorageItemExists"
                            class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                            to="/signIn">SignIn</RouterLink>
                        <RouterLink v-if="!localStorageItemExists"
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
    computed: {
        localStorageItemExists() {
            // hide login register
            return localStorage.getItem('bearerToken') !== null;
        }
    }
};
</script>