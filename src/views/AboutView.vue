<script lang="ts">
import { ref } from 'vue'

export default {
  data() {
    return {
      answer: 'Is it going to rain today?',
      loading: false,
    }
  },
  setup() {
    let pageName = ref('About')
    const changeRandomName = () => {
      const randomNumber = Math.floor(Math.random() * 100)
      pageName.value = `About: ${randomNumber}`
    }
    return { pageName, changeRandomName }
  },
  methods: {
    async getAnswer() {
      this.loading = true
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <p class="mt-4 mb-8">
    <strong>This page uses Options API and Composition API together.</strong>
    <br />
    The Options API is used for the methods and data, while the Composition API is used for the
    reactive state of the page name.
  </p>

  <div>
    <h1 @click="getAnswer" class="text-4xl">{{ answer }}</h1>
    <button
      @click="getAnswer"
      class="px-4 py-2.5 text-white bg-amber-800 rounded-lg mt-4 cursor-pointer"
    >
      {{ loading ? 'Loading...' : 'Get Answer (Option)' }}
    </button>
  </div>

  <div class="mt-10">
    <h1 @click="changeRandomName" class="text-4xl">This is an {{ pageName }} page</h1>
    <button
      @click="changeRandomName"
      class="px-4 py-2.5 text-white bg-blue-800 rounded-lg mt-4 cursor-pointer"
    >
      Change Page Name (Composition)
    </button>
  </div>
</template>

<style></style>
