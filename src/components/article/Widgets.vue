<script setup>
import { ref } from "vue";

const posts = ref([])
</script>
<template>
  <h2 class="font-bold text-2xl text-caractere">Recommandations</h2>

  <div
      v-for="item in posts"
      class="m-8 max-w-sm flex items-center rounded-lg shadow-lg border-gray-400 group">
    <div class="mr-4 basis-28 flex-shrink-0">
      <a href="#">
        <img class="rounded-lg h-max aspect-square group-hover:opacity-75" src="{{ recommandation.image }}" alt="img"/>
      </a>
    </div>
    <div class="pl-2">
      <a href="#" class="fillPink">
        <h3 class="font-bold text-base">{{ item.title }}</h3>
        <p class="mt-1">
          {{ item.excerpt }}
        </p>
        <p class="mt-1">
          The secret to baking the best pizza at home lies in the preparation of the...
        </p>
      </a>
    </div>
  </div>
</template>