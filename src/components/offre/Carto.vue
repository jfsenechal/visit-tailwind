<script setup>
const latitude = 50.2268;
const longitude = 5.3442;
</script>
<template>
  <div id="openmap_offre" class="my-3 -z-10 h-[25rem] xl:h-[35rem] w-4/5 mx-auto"
       data-latitude="{{ latitude }}"
       data-longitude="{{ longitude }}">
  </div>
</template>