<script setup>
import {onMounted, ref} from "vue";

const events = ref([]);

function getEvents() {
  fetch("https://www.marche.be/api/events.php")
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        events.value = data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
}

onMounted(() => {
  getEvents();
});

</script>
<template>
  <div class="shadow-md p-4">
    <h2
        class="py-2 px-4 xl:p-4 text-center font-montserrat-bold text-2xl text-grey-dark lg:text-left"
    >
      Agenda
    </h2>
    <ul>
      <li
          v-for="item in events.slice(0,4)"
          :key="item.codeCgt"
      >
        <a :href="item.url"
           class="grid grid-cols-[5rem,1fr] xl:grid-cols-[10rem,1fr] my-2 border border-borderjf rounded-lg hover:border-cta-light transition-all duration-500">
          <div
              class="flex flex-col justify-center items-center py-2 border-x hover:bg-cta-light hover:text-white transition-all duration-500">
            <span class="text-xl font-extrabold">{{ item.dateEvent["day"] }}</span>
            <span class="font-semibold">{{ item.dateEvent["month"] }}</span>
            <span class="font-semibold">{{ item.dateEvent["year"] }}</span>
          </div>
          <div class="flex flex-col items-start justify-center py-2 px-8">
            <span>{{ item.nom }}</span>
            <span class="text-gray-500">{{ item.locality }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <a
      class="mt-4 ml-auto mr-2 flex block w-72 items-center justify-center font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
      href="/"
      title="Tout l'agenda"
  >
    Tous les évènements
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>
  </a>

</template>