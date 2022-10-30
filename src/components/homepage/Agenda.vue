<script setup>
import { onMounted, ref } from "vue";

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
  <h2
      class="py-2 px-4 xl:p-4 text-center font-montserrat-bold text-2xl text-grey-dark lg:text-left"
  >
    Agenda
  </h2>
    <ul>
      <li
          v-for="item in events.slice(0,3)"
          :key="item.codeCgt"
      >
        <a :href="item.url"
           class="grid grid-cols-2 my-2 border border-borderjf rounded-lg hover:border-cta-light transition-all duration-500">
          <div
              class="flex flex-col justify-center items-center border-x hover:bg-cta-light hover:text-white transition-all duration-500">
            <span class="text-xl font-extrabold">{{ item.dateEvent["day"] }}</span>
            <span class="font-semibold">{{ item.dateEvent["month"] }}</span>
            <span class="font-semibold">{{ item.dateEvent["year"] }}</span>
          </div>
          <div class="flex flex-col items-start justify-center px-8">
            <span>{{ item.nom }}</span>
            <span class="text-gray-500">{{ item.locality }}</span>
          </div>
        </a>
      </li>
    </ul>

  <a
      class="mt-4 ml-auto mr-2 block block w-56 items-center justify-center font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
      href="/"
      title="Tout l'agenda"
  >
    Tout l'agenda
    <i class="fa fa-chevron-right ml-4 h-16 w-16" aria-hidden="true"></i>
  </a>

</template>