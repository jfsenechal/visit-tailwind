<script setup>
const propos = defineProps(['offre'])
</script>
<template>
  {{ propos.offre.descriptions[0].value }}
</template>