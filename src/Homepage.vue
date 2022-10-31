<script setup>
import Header from '@/components/header/Header.vue'
import SearchHome from '@/components/homepage/SearchHome.vue'
import IconesHome from '@/components/homepage/IconesHome.vue'
import HomeCaractere from '@/components/homepage/HomeCaractere.vue'
import Inspiration from '@/components/homepage/Inspiration.vue'
import Agenda from '@/components/homepage/Agenda.vue'
import Footer from '@/components/footer/Footer.vue'</script>

<template>
  <Header/>
  <main>
    <div class="bg-home bg-no-repeat bg-cover bg-center h-[50rem]">
      <div class="relative bg-home-color py-24 h-full">
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
        <div class="shadow-lg p-4">
          <Agenda/>
        </div>
      </section>
    </div>
  </main>
  <Footer/>
</template>
<style>
.bg-home-color {
  background: linear-gradient(90deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>
