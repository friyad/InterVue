<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const data = ref<{ id: number; userId: number; title: string; completed: boolean } | null>(null)

const fetchData = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    data.value = result
  } catch (error) {
    console.error('Fetch error:', error)
    data.value = null
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
      <div
        v-if="data"
        class="p-3 border rounded-md border-white/15 bg-white/10 hover:bg-white/5 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <h3 class="text-lg font-semibold">{{ data.title }}</h3>
        <p class="text-sm text-white/60">User ID: {{ data.userId }}</p>
        <p class="text-sm text-white/60">Completed: {{ data.completed ? 'Yes' : 'No' }}</p>
      </div>
      <div v-else>
        <p class="text-sm text-white/60">Loading... | no data found</p>
      </div>
    </div>
  </main>
</template>
