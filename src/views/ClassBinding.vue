<script setup lang="ts">
import { computed, reactive } from 'vue'

const hello = reactive({
  count: 4,
})

const updateCount = () => {
  hello.count += 5
}
const seen = true
</script>

<template>
  <main>
    <p>
      <strong>This page shows: Class Binding</strong>
    </p>
    <p
      v-if="seen"
      @click="updateCount"
      class="text-2xl my-4 select-none"
      :class="{
        'text-blue-500': hello.count < 10,
        'text-green-500': hello.count >= 10,
        'text-red-500': hello.count > 20,
        'text-yellow-500': hello.count > 30,
        'text-purple-500': hello.count > 40,
      }"
    >
      {{ hello.count }}: Click me. I will change. I show the class Bindings.
    </p>
  </main>
</template>
