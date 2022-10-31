<script setup>
import Navigation from '@/components/header/Navigation.vue'
import IconesSocial from "@/components/header/IconesSocial.vue";</script>

<template>
  <header class="fixed top-0 right-0 left-0 flex justify-between items-center p-3 bg-home-color bg-opacity-60 z-20">
    <a href="#" class="flex flex-grow flex-shrink-0">
      <img class="w-24 inline" alt="logo"
           src="https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <Navigation/>
    <IconesSocial/>
  </header>
</template>
<style>
.bg-home-color {
  background: linear-gradient(90deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>
