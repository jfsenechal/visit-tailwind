<script setup>
import Navigation from '@/components/header/Navigation.vue'
import IconesSocial from "@/components/header/IconesSocial.vue";
</script>

<template>
  <header class="fixed top-0 right-0 left-0 flex justify-between items-center p-3 bghomecolor bg-opacity-60 z-20">
    <a href="#" class="flex flex-grow flex-shrink-0">
      <img class="w-24 inline" alt="logo"
           src="https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <Navigation/>
    <div class="flex px-7 font-montserrat-medium relative group">
      <a href="#" class="text-white">FR</a>
      <ul class="invisible bg-white text-caractere my-4 h-24 absolute top-7 flex flex-col justify-center items-center group-hover:visible transition-all duration-500 ease-in-out">
        <li class="hover:text-cta-light before:triangle">
          <a href="#" class="p-4">FR</a>
        </li>
        <li class="hover:text-cta-light">
          <a href="#" class="p-4">NL</a>
        </li>
        <li class="hover:text-cta-light">
          <a href="#" class="p-4">EN</a>
        </li>
      </ul>
    </div>
    <IconesSocial/>
  </header>
</template>
<style>
.bghomecolor {
  background: linear-gradient(90deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>
