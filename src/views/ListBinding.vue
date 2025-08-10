<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const data = ref<{ id: number; userId: number; title: string; completed: boolean }[]>([])

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    data.value = result
  } catch (error) {
    console.error('Fetch error:', error)
    data.value = []
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <main>
    <p>
      <strong>This page shows: List Binding</strong>
    </p>

    <div class="grid gap-3 mt-5">
      <RouterLink v-for="item in data" :key="item.id" :to="`/list-binding/${item.id}`">
        <div
          class="p-3 border rounded-md border-white/15 bg-white/10 hover:bg-white/5 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-white/60">User ID: {{ item.userId }}</p>
          <p class="text-sm text-white/60">Completed: {{ item.completed ? 'Yes' : 'No' }}</p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
