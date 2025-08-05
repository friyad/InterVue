<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="block w-full bg-black px-10 py-4">
    <nav class="flex justify-start items-center gap-8">
      <RouterLink
        to="/"
        class="aria-[current='page']:text-green-500 aria-[current='page']:underline"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="aria-[current='page']:text-green-500 aria-[current='page']:underline"
        >About</RouterLink
      >
    </nav>
  </header>

  <div class="">
    <RouterView />
  </div>
</template>

<style scoped>
/* asdfsd */
</style>
