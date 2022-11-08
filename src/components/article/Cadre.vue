<script setup>
const props = defineProps(['excerpt'])
const excerpt2 = 'Marche-en-Famenne aime l’art, ainsi on y découvre des sculptures en tout lieu et des expositions aux thématiques variées.'
</script>
<template>
  <div class="bg-party w-full">
    <div class="relative flex flex-col p-4 xl:flex-row flex-wrap z-10 xl:h-36 items-center xl:justify-center mx-auto">
      <span class="text-lg xl:text-xl text-caractere font-montserrat-semi-bold" v-html="props.excerpt ?? excerpt2">

      </span>
      <img src="images/statue.png" alt="image"
           class="h-40 xl:absolute xl:top-0 xl:bottom-0 xl:right-12 xl:h-52 ">
    </div>
  </div>
</template>