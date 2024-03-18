<template>
  <NavBar :key="$route.fullPath"></NavBar>
  <main>
    <RouterView />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    'NavBar': NavBar
  },
}
</script>