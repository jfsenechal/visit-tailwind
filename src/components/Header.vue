<script setup lang="ts">
import Navigation from './Navigation.vue'
import IconesSocial from "./IconesSocial.vue";
</script>

<template>
  <header class="flex justify-between items-center p-3">
    <a href="#" class="flex flex-grow flex-shrink-0">
      <img class="w-70 h-40 inline" alt="logo"
           src="https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <nav class="ml-au45to">
      <Navigation/>
    </nav>
    <IconesSocial/>
  </header>
</template>
