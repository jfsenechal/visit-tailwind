<script setup>
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Cadre from "@/components/article/Cadre.vue";
import Filtres from "@/components/folder/Filtres.vue";
import Footer from "@/components/footer/Footer.vue";
import OffresList from "@/components/folder/OffresList.vue";

const cat = {'title': 'Bouger', 'excerpt': 'Pour votre santé'}
</script>
<template>
  <Header/>
  <HeaderArticle :title="'Bouger'"
                 :img="'https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_inspirations.png'"/>
  <Cadre :excerpt="cat.excerpt"/>
  <main class="container px-4 mt-2 xl:mt-4 mx-auto mb-8">

    <Filtres/>
    <OffresList/>

  </main>
  <Footer/>
</template>
