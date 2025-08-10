<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
</script>

<template>
  <header class="block w-full bg-black px-10 py-4 mb-4">
    <nav class="flex justify-start items-center gap-8">
      <RouterLink
        v-for="link in router.getRoutes()"
        :key="link.name"
        :to="link.path"
        class="aria-[current='page']:text-green-500 aria-[current='page']:underline capitalize"
        >{{ link.name }}</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
