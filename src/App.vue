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
    <div class="fle4x w-full bghomecolor bg-opacity-60 mix-blend-sc4reen">
      <Header/>
    </div>
    <main class="flex flex-col justify-center items-center w-full pt-60">
      <SearchHome/>
      <IconesHome/>
      <HomeCaractere/>
      <section class="bg-white w-full mx-2 mx-auto grid grid-cols-1 xl:px-40 xl:grid-cols-[60%,40%] xl:gap-4">
        <div>
          <Inspiration/>
        </div>
        <div class="shadow-lg p-4">
          <Agenda/>
        </div>
      </section>
    </main>
  </div>
  <Footer/>
</template>