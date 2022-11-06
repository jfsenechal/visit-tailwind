<script setup>
const propos = defineProps(['offre'])
</script>
<template>

  <h4>Communications</h4>
  <div v-for="communication in propos.offre.communications" :key="communication.urn"
       class="">
    <div class="grid grid-cols-[5rem,1fr]">
      <span class="font-montserrat-semi-bold text-cta-dark">{{ communication.type }}</span>
      <span>{{ communication.value }}</span>
    </div>
  </div>
</template>