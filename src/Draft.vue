<script setup>
import Header from "@/components/header/Header.vue";
import NavIconHomeMobile from '@/components/header/mobile/NavIconHomeMobile.vue'
import NavIconMenuMobileSvg from '@/components/header/mobile/NavIconMenuMobileSvg.vue'
import NavIconCommuneShortCutMobile from "@/components/header/mobile/NavIconCommuneShortCutMobile.vue";
import NavItemsMobile from "@/components/header/mobile/NavItemsMobile.vue";
import NavIconSearchMobile from "@/components/header/mobile/NavIconSearchMobile.vue";
import Navigation from "@/components/header/Navigation.vue";

function openMenuVivre() {
  const menu = document.querySelector("#menu-organise");
  menu.style.top = "0";
}
</script>

<template>
  <Header :image="''"/>
  <Navigation/>

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
