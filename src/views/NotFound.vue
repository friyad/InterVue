<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main>
    <div>
      <h1 class="text-3xl font-bold text-red-500">404 Not Found</h1>
      <p class="text-lg text-white/60">The page you are looking for does not exist.</p>
      <p class="text-sm text-white/60">
        Requested path: <code>{{ route.path }}</code>
      </p>
    </div>
  </main>
</template>
