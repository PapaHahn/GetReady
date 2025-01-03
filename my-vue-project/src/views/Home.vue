<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<template>
   <div class="w-screen h-screen text-center justify-center flex flex-col items-center">
      <h1 class="text-9xl">ARE YOU READY?</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">
         Klick Hier!
      </button>
   </div>
</template>