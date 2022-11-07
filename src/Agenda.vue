<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/header/Header.vue";
import HeaderArticle from "@/components/article/HeaderArticle.vue";
import Cadre from "@/components/article/Cadre.vue";
import Footer from "@/components/footer/Footer.vue";

const events = ref([]);

function getEvents() {
  fetch("https://www.marche.be/api/events.php")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      events.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getEvents();
});
</script>
<template>
  <Header :image="''" />
  <HeaderArticle :title="'Agenda des manifestations'"
                 :img="'https://visitmarche.be/wp-content/themes/visitmarche/assets/tartine/rsc/img/bg_events.png'"/>
 <Cadre :excerpt="'No excerpt'"/>
  <main class="container px-4 mt-2 xl:mt-4 mx-auto mb-8">
    <ul class="pt-6 grid grid-cols-1 gap-2 xl:gap-4 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
      <li
        v-for="item in events"
        :key="item.codeCgt"
        class="rounded-lg shadow-lg"
      >
        <a
          :href="item.url"
          class="group grid grid-cols-1 xl:grid-cols-2 overflow-hidden xl:block"
        >
          <img
            :src="item.images[0]"
            alt=""
            class="justify-self-center self-center h-48 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-60"
          />
          <div class="grid grid-cols-[6rem,1fr] xl:grid-cols-[8rem,1fr] my-2">
            <div
              class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
            >
          <span class="font-montserrat-semi-bold text-xl">
            {{ item.dateEvent["day"] }}
          </span>
              <span class="">{{ item.dateEvent["month"] }}</span>
              <span class="">{{ item.dateEvent["year"] }}</span>
            </div>
            <div class="flex flex-col items-start justify-center px-8">
              <span>{{ item.nom }}</span>
              <span class="text-sm text-gray-500 pt-2">{{ item.locality }}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </main>
  <Footer />
</template>
