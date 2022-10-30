<script setup>
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import Widgets from "@/components/article/Widgets.vue";
import ImageTop from "@/components/article/ImageTop.vue";
import Cadre from "@/components/article/Cadre.vue";

const post = {'post_title': 'coucou', 'content': ''}
</script>
<template>
  <Header/>
  <HeaderArticle/>
  <ImageTop/>
  <Cadre/>
  <article
      class="container grid grid-cols-1 xl:grid-cols-3 items-start mt-24 xl:mt-28 mx-auto px-4">
    <main id="primary" class="w-full mx-auto">


      <section class="min-h-screen container mx-auto grid grid-cols-[minmax(0,1fr),auto]">
        <div class="p-8">
          <h1 class="font-bold text-3xl text-caractere">{{ post.post_title }}</h1>
          <div class="prose max-w-none font-lora ">
            {{ post.content }}
          </div>
        </div>
        <aside class="p-8 border border-l-gray-300">
          <Widgets/>
        </aside>
      </section>
    </main>

  </article>
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