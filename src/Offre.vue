<script setup>
import {onMounted, ref} from "vue";
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Body from "@/components/article/Body.vue";
import Footer from "@/components/footer/Footer.vue";
import Cadre from "@/components/article/Cadre.vue";
import SeeAlso from "@/components/article/SeeAlso.vue";
import AddresseContact from "@/components/offre/AddresseContact.vue";

const offre = ref([]);

function getPost(id) {
  fetch("https://visitmarche.be/api/offre.php?id=" + id)
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        offre.value = data;
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
                 :img="offre.image"/>
  <Cadre :excerpt="offre.excerpt"/>
  <main class="container mx-auto">
    <article
        class="grid grid-cols-1 xl:grid-cols-2 items-start mt-2 xl:mt-4 mx-auto px-4">
      <div class="p-8 prose lg:prose-xl">
        <h1 class="font-bold text-2xl text-caractere">{{ offre.nom }}</h1>
        <AddresseContact :offre="offre"/>
      </div>
      <aside class="p-8">
        <SeeAlso/>
      </aside>
    </article>
  </main>
  <Footer/>
</template>