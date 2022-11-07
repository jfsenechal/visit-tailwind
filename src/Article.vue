<script setup>
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Body from "@/components/article/Body.vue";
import Footer from "@/components/footer/Footer.vue";
import Cadre from "@/components/article/Cadre.vue";
import SeeAlso from "@/components/article/SeeAlso.vue";
import {onMounted, ref} from "vue";
import Share from "@/components/article/Share.vue";
import Tags from "@/components/article/Tags.vue";

const post = ref([]);

function getPost(id) {
  fetch("https://visitmarche.be/api/post.php?id=" + id)
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        post.value = data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
}

onMounted(() => {
  const id = new URL(window.location).searchParams.get("id")
  getPost(id);
});

</script>
<template>
  <Header/>
  <HeaderArticle :title="'Inspiration'"
                 :img="post.image"/>
  <Cadre :excerpt="post.excerpt"/>
  <main class="container mx-auto">
    <article
        class="grid grid-cols-1 xl:grid-cols-[60%,40%] items-start mt-2 xl:mt-4 mx-auto px-4">
      <div class="p-2 xl:p-4">
        <h1 class="font-montserrat-semi-bold text-lg xl:text-2xl text-caractere">{{ post.post_title }}</h1>
        <Body v-html="post.content"/>
      </div>
      <aside class="xl:p-4">
        <Share/>
        <Tags/>
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