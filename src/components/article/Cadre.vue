<script setup>
const props = defineProps(['excerpt'])
const excerpt2 = 'Marche-en-Famenne aime l’art, ainsi on y découvre des sculptures en tout lieu et des expositions aux thématiques variées.'
</script>
<template>
  <div class="bg-party w-full">
    <div class="relative flex flex-wrap z-10 h-36 items-center justify-end lg:justify-center mx-auto">
      <span class="text-lg xl:text-xl text-caractere font-montserrat-semi-bold" v-html="props.excerpt ?? excerpt2">

      </span>
      <img src="images/statue.png" alt="image"
           class="absolute xl:top-0 xl:bottom-0 right-12 h-52 ">
    </div>
  </div>
</template>