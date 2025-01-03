<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>

<template>
  <main>
    <RouterView />
    <SpeedInsights />
  </main>
</template>

