<template>
  <nav class="space-x-2">
    <RouterLink class="hover:underline" to="/">Home</RouterLink>
    <RouterLink class="hover:underline" to="/signIn">SignIn
    </RouterLink>
  </nav>
  <main class="min-h-screen flex justify-center items-center">
    <RouterView />
  </main>
</template>