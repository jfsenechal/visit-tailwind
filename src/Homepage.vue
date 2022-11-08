<!-- bg image sizes https://web.dev/learn/design/responsive-images/#background-images
ajour aussi dans le head prefetch de l'url d'img de fond
<link rel="prefetch" href="hero.jpg" as="image">
-->
<script setup>
import Header from '@/components/header/Header.vue'
import SearchHome from '@/components/homepage/SearchHome.vue'
import IconesHome from '@/components/homepage/IconesHome.vue'
import HomeCaractere from '@/components/homepage/HomeCaractere.vue'
import Inspiration from '@/components/homepage/Inspiration.vue'
import Agenda from '@/components/homepage/Agenda.vue'
import BannerParty from '@/components/homepage/BannerParty.vue'
import Footer from '@/components/footer/Footer.vue'
import Partenaires from "@/components/homepage/Partenaires.vue";
</script>

<template>
  <Header/>
  <main>
    <div class="bg-home-img bg-no-repeat bg-cover bg-center h-[50rem]">
      <div class="relative bg-home-color pt-4 xl:py-24 h-full">
        <div class="flex flex-col justify-center items-center w-full pt-60">
          <SearchHome/>
          <IconesHome/>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <HomeCaractere/>
      <section class="bg-white w-full mx-2 mx-auto grid grid-cols-1 xl:px-40 xl:grid-cols-[60%,40%] xl:gap-4">
        <div>
          <Inspiration/>
        </div>
        <div class="px-4">
          <Agenda/>
        </div>
      </section>
    </div>
    <BannerParty/>
  </main>
  <Partenaires/>
  <Footer/>
</template>
<style>
.bg-home-img {
  background-image: url('https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_home.jpg');
}
</style>