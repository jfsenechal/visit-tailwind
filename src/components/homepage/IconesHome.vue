<script setup>
const icones = [
  {id: 1, name: 'Patrimoine', image: '/images/icon_patrimony_white.svg', bgcolor: 'hover:bg-patrimony', url: '/'},
  {id: 2, name: 'Arts', image: '/images/icon_arts_white.svg', bgcolor: 'hover:bg-art', url: '/'},
  {id: 3, name: 'Balades', image: '/images/icon_walks_white.svg', bgcolor: 'hover:bg-walk', url: '/'},
  {id: 4, name: 'Gourmandises', image: '/images/icon_delicaties_white.svg', bgcolor: 'hover:bg-delicacy', url: '/'},
  {id: 5, name: 'Fêtes', image: '/images/icon_parties_white.svg', bgcolor: 'hover:bg-party', url: '/'}
]
</script>
<template>
  <ul class="mx-auto xl:w-full flex flex-wrap xl:flex-nowrap justify-center xl:max-w-[36rem] pt-10 gap-y-2">
    <li v-for="icon in icones" :key="icon.id"
        class="flex justify-center items-center w-[33%] basis-1/3 xl:w-[20%] xl:basis-1/5 text-center">
      <a :href="icon.url">
        <img class="bg-cta-light h-14 w-14 rounded-full mx-auto"
             :class="icon.bgcolor"
             :src="icon.image" :alt="icon.name"/>
        <span class="text-white mx-auto font-montserrat-regular">{{ icon.name }}</span>
      </a>
    </li>
  </ul>
</template>