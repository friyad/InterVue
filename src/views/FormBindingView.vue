<script setup>
import { ref } from 'vue'

const message = ref()
</script>

<template>
  <main>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </main>
</template>
