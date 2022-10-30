<script setup>
import { ref } from "vue";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

</script>
<template>
  <Header @open-search="updateSearch" />
  <article
    class="container grid grid-cols-1 xl:grid-cols-3 items-start mt-24 xl:mt-28 mx-auto px-4">
  </article>
  <Footer />
</template>
