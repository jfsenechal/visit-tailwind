<script setup lang="ts">
import Navigation from './Navigation.vue'
import IconesSocial from "./IconesSocial.vue";
</script>

<template>
  <header class="flex justify-between items-start p-3 bg-">
    <a href="#" class="flex flex-grow flex-shrink-0">
      <img class="w-24 inline" alt="logo"
           src="https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/img_logo.png"/>
    </a>
    <Navigation/>
    <div class="flex px-7 relative group">
      <a href="" class="text-white">FR</a>
      <ul class="invisible bg-white text-black h-20 absolute top-7 w-8 flex flex-col justify-center items-center group-hover:visible transition-all duration-500 ease-in-out">
        <li class="hover:text-cta-light before:triangle "><a href="#">FR</a></li>
        <li class="hover:text-cta-light"><a href="#">NL</a></li>
        <li class="hover:text-cta-light"><a href="#">EN</a></li>
      </ul>
    </div>
    <IconesSocial/>
  </header>
</template>
