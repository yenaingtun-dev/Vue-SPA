<script>
export default {
    props: {
        posts: Object,
    },
}
</script>

<template>
    <div class="mb-2" v-for="post in posts">
        <div class="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                {{ post.title }}
            </h3>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {{ post.description }}
            </p>
        </div>
    </div>
</template>