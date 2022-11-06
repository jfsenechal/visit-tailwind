<script setup>
const propos = defineProps(['offre'])
</script>
<template>
  <div class="grid grid-col4s-3 justify-center gap-2 gallery">
    <a v-for="media in propos.offre.images"
       :href="media"
       class="">
      <img :src="media" alt="alt" class="shadow-lg"/>
    </a>
  </div>
</template>
<style>
.gallery a:first-child {
  grid-column: span 3;
}
</style>