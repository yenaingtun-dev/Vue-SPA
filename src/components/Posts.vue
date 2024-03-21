<script>
export default {
    props: {
        posts: Object,
    },
    data() {
        return {
            postModal: {
                show: false,
                post: {
                    id: null,
                    title: null,
                    description: null
                }
            }
        }
    },
}
</script>

<template>
    <div class="mb-2" v-for="post in posts">
        <div class="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
            @click="postModal.show = !postModal.show; this.postModal.post = post">
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                {{ post.title }}
            </h3>
            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {{ post.description }}
            </p>
        </div>
    </div>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" v-show="postModal.show">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form @submit.prevent="postUpdate" action="#">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center space-y-3 sm:ml-4 sm:mt-0 sm:text-left">
                                    <input type="text" v-model="postModal.post.title"
                                        class="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm">
                                    <input type="text" v-model="postModal.post.description"
                                        class="w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm">
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit"
                                class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Update</button>
                            <button type="button" @click="postModal.show = false"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>