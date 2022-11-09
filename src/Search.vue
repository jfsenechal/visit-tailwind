<script setup xmlns="http://www.w3.org/1999/html">
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Footer from "@/components/footer/Footer.vue";
import {ref, watch, onMounted} from "vue";

const results = ref([]);
const query = ref('');

watch(query, async (newQuestion, oldQuestion) => {
  console.log(newQuestion);
  if (newQuestion.length > 3) {
    search(newQuestion);
  }
});

function search(s) {
  fetch("https://visitmarche.be/api/search.php?s=" + s)
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        results.value = data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
}
onMounted(() => {
  search('hotel');
});
</script>
<template>
  <Header/>
  <HeaderArticle :title="'Search'"
                 :img="'https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_inspirations.png'"/>
  <main class="container px-4 mt-2 xl:mt-4 mx-auto mb-8 min-h-[20rem]">
    <form class="mx-auto xl:mx-[20rem] flex flex-col justify-end" action="/">
      <label for="search" class="sr-only">
        Rechercher
      </label>
      <div class="relative flex">
        <div class="grow-0 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <input id="search"
               v-model="query"
               name="search"
               class="grow block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-cta-dark focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cta-dark sm:text-sm"
               placeholder="Chercher" type="search">
      </div>
      <button type="submit" name="search" class="p-4 m-4 grow-0 border border-cta-dark rounded-md self-end hover:bg-cta-light hover:text-white">
        Rechercher
      </button>
    </form>

    <div class="mx-auto xl:w-[22rem] my-4">36 RÉSULTATS POUR "hotel"</div>

    <ul class="pt-6 grid grid-cols-1 gap-2 xl:gap-4 xl:grid-cols-2"
    >
      <li
          v-for="item in results"
          :key="item.id"
          class="rounded-lg p-2 xl:p-4 h16 shadow-md"
      >
        <a
            :href="item.url"
            class="group flex flex-col gap-2"
        >
          <h3 class="hover:text-cta-light font-montserrat-semi-bold">{{ item.name }}</h3>
          <span class="text-caractere">{{ item.excerpt.slice(0,150) }}</span>
        </a>
      </li>
    </ul>
  </main>
  <Footer/>
</template>
