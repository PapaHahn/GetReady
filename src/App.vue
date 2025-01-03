

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
/* Definiere die Übergangs-Styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>