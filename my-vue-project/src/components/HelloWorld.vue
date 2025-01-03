<script setup lang="ts">
import { ref } from 'vue'

const greeting = ref('Hello, welcome to the Vue app!')
const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 10px;
}
</style>