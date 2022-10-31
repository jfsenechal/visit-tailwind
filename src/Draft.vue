<script setup>

import NavIconHomeMobile from '@/components/header/mobile/NavIconHomeMobile.vue'
import NavIconMenuMobileSvg from '@/components/header/mobile/NavIconMenuMobileSvg.vue'
import NavIconCommuneShortCutMobile from "@/components/header/mobile/NavIconCommuneShortCutMobile.vue";
import NavItemsMobile from "@/components/header/mobile/NavItemsMobile.vue";
import NavIconSearchMobile from "@/components/header/mobile/NavIconSearchMobile.vue";

function openMenuVivre() {
  const menu = document.querySelector("#menu-organise");
  menu.style.top = "0";
}
</script>

<template>
<nav class="musshadow fixed bottom-0 top-auto right-0 left-0 xl:static xl:shadow-none">
    <ul class="grid grid-cols-5 items-center justify-evenly bg-cta-dark text-white xl:flex xl:bg-white xl:text-cta-dark"
        id="navigationTop">
      <NavIconHomeMobile />
      <NavIconSearchMobile />
       <li
        class="nav-top xl:font-montserrat-semi-bold xl:transition-all xl:duration-500 btn-vivre">
        <a href="#" class="hidden xl:flex">
          <NavIconMenuMobileSvg />
        </a>
        <label for="checkboxMenu" class="xl:hidden icon-menu-mobile cursor-pointer">
          <button name="menu" @click="openMenuVivre">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <span class="text-menu-mobile">Organise</span>
        </label>
        <NavItemsMobile />
      </li>
      <NavIconCommuneShortCutMobile />
    </ul>
</nav>
</template>
<style>

li.nav-top {
  @apply xl:p-3 xl:text-cta-dark
  xl:transition-shadow xl:duration-300 xl:ease-in-out;
}

li.nav-top:hover {
  box-shadow: 0 -3px 0 0 #4ae0c7 inset;
}

.btn-vivre:hover > nav {
  @apply xl:block
}

.icon-menu-mobile {
  @apply my-4 flex flex-col flex-wrap items-center justify-center font-montserrat-semi-bold;
}

.text-menu-mobile {
  @apply text-xs font-montserrat-light;
}

.musshadow {
  box-shadow: 0 -0.125rem 0.45rem rgba(0, 0, 0, 0.75);
}
</style>
