<script setup lang="ts">
import { useRouter } from 'vue-router';
import backgroundImage from '../assets/background.png'; // Importiere das Hintergrundbild
const router = useRouter();

const navigateToCounter = () => {
  router.push('/counter');
};

</script>



<template>
    <div class=" w-screen h-screen text-center justify-center flex flex-col items-center bg-cover grayscale bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
            
        <div class="absolute inset-0 bg-black opacity-50 ">
        </div>
        <div class="z-10">
            <h1 class="text-9xl text-white font-extrabold">ARE YOU READY?</h1>
            <button 
            class="bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full mt-10" 
            @click="navigateToCounter">
            Klick Hier!
            </button>
        </div>
        
    </div>
  </template>
  
