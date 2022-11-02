<script setup>
import { ref } from "vue";
import Navigation from '@/components/header/Navigation.vue'
import IconesSocial from "@/components/header/IconesSocial.vue";
import LanguagesSelect from "@/components/header/LanguagesSelect.vue";
import PopupSearch from "@/components/header/PopupSearch.vue";

const searchIsOpen = ref(false);

function openSearch() {
  console.log("open");
  console.log(searchIsOpen.value);
  if (searchIsOpen.value === false) {
    searchIsOpen.value = true;
  }
}

function closeSearch() {
  console.log("close");
  if (searchIsOpen.value === true) {
    console.log("close2");
    searchIsOpen.value = false;
  }
}
</script>

<template>
  <header class="fixed top-0 right-0 left-0 flex justify-end items-center p-3 bg-home-color bg-opacity-60 z-20">
    <a href="#" class="flex flex-grow flex-shrink-0 xl:mr-auto">
      <img class="h-10 w-16 xl:h-14 xl:w-24 inline" alt="logo"
           src="images/visit_logo.png"/>
    </a>
    <Navigation @open-search="openSearch"/>
    <LanguagesSelect/>
    <IconesSocial/>
  </header>
  <PopupSearch @close-search=closeSearch @open-search="openSearch" :searchIsOpen="searchIsOpen" />

</template>
<style>
.bg-home-color {
  background: linear-gradient(90deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>
