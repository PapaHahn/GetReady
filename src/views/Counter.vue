<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import backgroundImage from '../assets/background.png'; // Importiere das Hintergrundbild
// Ziel-Datum festlegen: 1. Juni 2026, 00:00:00
const targetDate = new Date('June 1, 2026 00:00:00').getTime();

// Reaktive Variablen für Tage, Stunden, Minuten und Sekunden
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Intervall-ID speichern, um das Intervall später zu stoppen
let intervalId: number;

// Funktion zur Aktualisierung des Countdowns
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // Wenn das Ziel-Datum erreicht ist, stoppe das Intervall und setze alles auf 0
    clearInterval(intervalId);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  // Berechnungen für Tage, Stunden, Minuten und Sekunden
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};


// Beim Mounten der Komponente das Intervall starten
onMounted(() => {
  updateCountdown(); // Initiale Berechnung
  intervalId = window.setInterval(updateCountdown, 1000);
});

// Beim Unmounten der Komponente das Intervall stoppen
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>



<template>
  <div class="flex flex-col items-center justify-center h-screen bg-black text-white bg-cover grayscale bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }">
    
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="z-10 grid grid-cols-4 gap-x-12 gap-y-8 justify-items-center">

      <span class="text-6xl font-bold items-center">Tage</span>
      <span class="text-6xl font-bold">Stunden</span>
      <span class="text-6xl font-bold">Minuten</span>
      <span class="text-6xl font-bold">Sekunden</span>

      <span class="text-6xl font-bold">{{ days }}</span>
      <span class="text-6xl font-bold">{{ hours }}</span>
      <span class="text-6xl font-bold">{{ minutes }}</span>
      <span class="text-6xl font-bold">{{ seconds }}</span>
      
    </div>
   
  
  </div>
</template>

<style scoped>
</style>