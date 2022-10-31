<script setup>
import {onMounted, ref} from "vue";

const offres = ref([]);

function getOffres() {
  fetch("https://visitmarche.be/api/offres.php?id=5")
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        offres.value = data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
}

onMounted(() => {
  getOffres();
});
</script>
<template>
  <ul class="pt-6 grid grid-cols-1 gap-2 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
    <li
        v-for="item in offres"
        :key="item.codeCgt"
        class=" rounded-lg shadow-lg"
    >
      <a
          href="{{item.url}}"
          class="group grid grid-cols-1 xl:grid-cols-2 overflow-hidden xl:block"
      >
        <img
            :src="item.image"
            alt=""
            class="justify-self-center self-center h-48 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-60"
        />
        <div class="ml-2 flex flex-col items-start justify-between h-36 py-2 xl:py-4 xl:px-4">
          <h3
              class="xl:text-md xl:font-montserrat-semi-bold text-md text-cta-dark group-hover:text-cta-light"
          >
            {{ item.name }}
          </h3>
          <span class="text-caractere text-sm font-montserrat-light" v-html="item.description.substring(0,80)"></span>
          <div
              class="text-cta-light my-1 flex gap-1 block font-montserrat-medium text-xs xl:text-base">
            <span v-for="tag in item.tags">
              {{ tag.nom }}
            </span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>