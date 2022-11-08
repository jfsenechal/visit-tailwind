<script setup>
import {onMounted, ref} from "vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Cadre from "@/components/article/Cadre.vue";
import AddresseContact from "@/components/offre/AddresseContact.vue";
import SeeAlso from "@/components/article/SeeAlso.vue";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import Description from "@/components/offre/Description.vue";
import Images from "@/components/offre/Images.vue";
import Communication from "@/components/offre/Communication.vue";

const offre = ref([]);

function getOffre(id) {
  id = 'RST-01-08H3-0SB1'
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
  //console.log(id)
  //getOffre(id);
});

</script>

<template>
  <Header/>
  <HeaderArticle :title="'Inspiration'"
                 :img="data.image"/>
  <Cadre :excerpt="data.excerpt"/>
  <main class="container mx-auto">
    <article
        class="grid grid-cols-1 xl:grid-cols-[60%,40%] items-start mt-2 xl:mt-4 mx-auto px-4">
      <div class="p-4 prose lg:p44rose-xl">
        <h1 class="font-bold text-2xl text-caractere">{{ data.nom }}</h1>
        <AddresseContact :offre="data"/>
        <Description :offre="data" />
        <Communication :offre="data" />
        <Images :offre="data" />
      </div>
      <aside class="p-4">
        <SeeAlso/>
      </aside>
    </article>
  </main>
  <Footer/>
</template>