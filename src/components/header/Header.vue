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
      <a href="#" class="inline-flex items-center text-white">FR
        <svg class="text-white ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
      </a>
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
