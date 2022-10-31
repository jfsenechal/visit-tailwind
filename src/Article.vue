<script setup>
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Body from "@/components/article/Body.vue";
import Footer from "@/components/footer/Footer.vue";
import Cadre from "@/components/article/Cadre.vue";
import SeeAlso from "@/components/article/SeeAlso.vue";

const post = {
  'post_title': 'Un panorama impressionnant!',
  'excerpt': 'Tour Circus',
  'category':'Inspirations',
  'content': "Après d’importants travaux de rénovation, la figure emblématique du patrimoine marchois a été inaugurée et est désormais accessible au grand public.<br/> L’impressionnante Tour de la Famenne offre une vue imprenable sur la région de Marche et ses environs. Son accès est possible 7 jours/7 de 10h à 17h Pour 2€, vous pourrez contempler le panorama de la région"
}
</script>
<template>
  <Header/>
  <HeaderArticle :title="post.category" :img="'https://visitmarche.be/wp-content/uploads/2021/02/Rencontres-scaled.jpg'"/>
  <Cadre :excerpt="post.excerpt"/>
  <main class="container mx-auto">
    <article
        class="grid grid-cols-1 xl:grid-cols-2 items-start mt-2 xl:mt-4 mx-auto px-4">
      <div class="p-8">
        <h1 class="font-bold text-2xl text-caractere">{{ post.post_title }}</h1>
        <Body/>
      </div>
      <aside class="p-8">
        <SeeAlso/>
      </aside>
    </article>
  </main>
  <Footer/>
</template>
<!--
<main id="primary" class="w-full mx-auto">

{% include '@VisitTail/article/_imageTop.html.twig' %}
{% include '@VisitTail/article/_cadre.html.twig' %}

<section class="min-h-screen container mx-auto grid grid-cols-[minmax(0,1fr),auto]">
  <div class="p-8">
    <h1 class="font-bold text-3xl text-caractere">{{ post.post_title }}</h1>
    <div class="prose max-w-none font-lora ">
      {{ content|raw }}
    </div>
  </div>
  <sidebar class="p-8 border border-l-gray-300">
    {% include '@VisitTail/article/_widgets.html.twig' %}
  </sidebar>
</section>
</main>
-->