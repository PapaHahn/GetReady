<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Countdown',
  data() {
    return {
      countdown: 10 // Example countdown value
    }
  },
  mounted() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
        } else {
          clearInterval(interval)
        }
      }, 1000)
    }
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-5xl">Countdown: {{ countdown }}</h1>
    <p class="mt-4">Get ready!</p>
  </div>
</template>

<style scoped>
</style>