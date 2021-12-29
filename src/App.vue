<script setup>
import Header from './components/Header.vue'
import SearchHome from './components/SearchHome.vue'
import IconesHome from './components/IconesHome.vue'
import HomeCaractere from './components/HomeCaractere.vue'
import Inspiration from './components/Inspiration.vue'
import Agenda from './components/Agenda.vue'
import BannerParty from './components/BannerParty.vue'
import Partenaires from './components/Partenaires.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-bg_home bg-cover bg-center">
    <div class="fle4x h-full w-full bghomecolor bg-opacity-60 mix-blend-sc4reen">
      <Header/>
    </div>
    <div class="max-w-2xl flex flex-col justify-center items-center pt-60">
      <SearchHome/>
      <IconesHome/>
    </div>
  </div>
</template>