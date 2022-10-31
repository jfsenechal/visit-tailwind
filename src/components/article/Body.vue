<script setup>
const propos = defineProps(['post'])

</script>
<template>
  <section class="my-8 text-body" v-html="propos.post.content">

  </section>
</template>
