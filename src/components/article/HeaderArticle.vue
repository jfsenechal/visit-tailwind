<script setup>
const props = defineProps(['img', 'title'])
</script>
<template>
  <div class="h-[37rem]">
    <div class="relative h-full w-full bg-gradient-to-r from-pink-300/50 via-purple-300/50 to-indigo-400/50">
      <img class="w-full h-full object-cover absolute mix-blend-overlay"
           :src="props.img" alt=""/>
      <div class="flex flex-col px-6 absolute left-0 bottom-8">
        <a href="https://visitmarche.be/categorie/inspirations/"
           class="flex flex-inline items-center font-montserrat-regular  text-bglighter self-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewbox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"/>
          </svg>
          Retour à {{ props.title }}</a>
        <h2 class="text-white font-montserrat-semi-bold text-3xl">
          {{ props.title }}
        </h2>
      </div>
    </div>
  </div>
</template>