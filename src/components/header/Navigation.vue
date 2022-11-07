<!--
https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/
  left: 0;
  top: 100%;
   -->
<script setup>
import NavIconHomeMobile from '@/components/header/mobile/NavIconHomeMobile.vue'
import NavIconCommuneShortCutMobile from "@/components/header/mobile/NavIconCommuneShortCutMobile.vue";
import NavItemsMobile from "@/components/header/mobile/NavItemsMobile.vue";
import NavIconSearchMobile from "@/components/header/mobile/NavIconSearchMobile.vue";
import NavItemsXl from "@/components/header/NavItemsXl.vue";

const emit = defineEmits(["open-search", "close-search"]);

function openSearch() {
  emit("open-search");
}

function closeSearch() {
  emit("close-search");
}

/**
 * Ouvre et ferme menu vivre en version mobile
 * @param action
 */
function toggleMenu(action) {
  const menu = document.querySelector("#menu-organise");
  if (action === "close") {
    menu.style.top = "100%";
  }
  if (action === "open") {
    menu.style.top = 0;
  }
}

/**
 * Open main menu mobile
 */
function openMenuVivre() {
  const menu = document.querySelector("#menu-organise");
  menu.style.top = "0";
}
</script>

<template>
  <nav class="xl:h-8 musshadow fixed bottom-0 top-auto right-0 left-0 xl:static xl:shadow-none">
    <ul class="grid grid-cols-5 items-center font-montserrat-semi-bold justify-evenly bg-caractere xl:bg-transparent text-white xl:flex xl:items-start xl:gap-6 xl:font-montserrat-semi-bold"
        id="navigationTop">
      <NavIconHomeMobile/>
      <NavIconSearchMobile/>
      <li
          class="xl:hidden btn-vivre">
        <label for="checkboxMenu" class="xl:hidden icon-menu-mobile cursor-pointer">
          <button name="menu" @click="openMenuVivre">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
          <span class="text-menu-mobile">Organise</span>
        </label>
        <NavItemsMobile @toggle-menu="toggleMenu"/>
      </li>
      <NavIconCommuneShortCutMobile/>
      <NavItemsXl @open-search="openSearch"/>
    </ul>
  </nav>
</template>
<style>
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
