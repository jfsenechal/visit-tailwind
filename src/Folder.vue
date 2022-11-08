<script setup>
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Cadre from "@/components/article/Cadre.vue";
import Categories from "@/components/folder/Categories.vue";
import Posts from "@/components/folder/Posts.vue";
import Footer from "@/components/footer/Footer.vue";

const cat = {'title': 'Bouger', 'excerpt': null}
</script>
<template>
  <Header/>
  <HeaderArticle :title="'Bouger'"
                 :img="'https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_inspirations.png'"/>
  <Cadre :excerpt="cat.excerpt"/>
  <main class="container px-4 mt-2 xl:mt-4 mx-auto mb-8">

    <Categories/>
    <Posts/>

  </main>
  <Footer/>
</template>
