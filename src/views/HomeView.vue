<script setup lang="ts">
import { handleSubmit } from '@/utils/utils'
import { computed, reactive } from 'vue'

const hello = reactive({
  count: 4,
})

const updateCount = () => {
  hello.count++
}
const isDisabled = computed(() => hello.count >= 10)
const seen = true
const rawHtml = `<span class="text-red-500">This is a raw HTML content</span>`
const dynamicID = 'home-view'
</script>

<template>
  <main>
    <p>
      <strong
        >This page shows Template Syntex, atribute Binding, and Event Handling in Vue 3.</strong
      >
    </p>
    <form v-on:submit.prevent="handleSubmit">
      <button
        type="button"
        @click="updateCount"
        :disabled="isDisabled"
        class="px-4 py-1 text-white bg-blue-800 disabled:bg-gray-400 disabled:text-gray-600 rounded-sm mt-8 cursor-pointer"
      >
        {{ hello.count }}: Template Syntex
      </button>

      <div v-html="rawHtml" class="my-4"></div>

      <time :datetime="Date()" class="text-white text-3xl">
        {{ new Date().toLocaleTimeString() }}
      </time>

      <hr class="border-white/10 my-8" />

      <h1 :id="dynamicID" class="text-4xl">This is Dynamic Id :id="dynamicID"</h1>

      <hr class="border-white/10 my-8" />

      <button
        type="submit"
        class="px-4 py-3 text-white bg-amber-800 rounded-lg mt-8 cursor-pointer"
      >
        Form Submit
      </button>
    </form>
  </main>
</template>
