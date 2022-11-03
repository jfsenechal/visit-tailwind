<script setup>
import { onMounted, ref } from "vue";

const filtres = ref([]);

function getFiltres() {
  fetch("https://visitmarche.be/api/filtres.php?id=5")
    .then(function(response) {
      // The API call was successful!
      return response.json();
    })
    .then(function(data) {
      // This is the JSON from our response
      filtres.value = data;
    })
    .catch(function(err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

onMounted(() => {
  getFiltres();
});
</script>
<template>

  <select name="category"
          class="xl:hidden flex border border-cta-primary p-2 mt-3 font-montserrat-semi-bold bg-white mx-auto">
    <option v-for="item in filtres" :key="item.id" :value="item.id">
      {{ item.nom }}
    </option>
  </select>

  <ul class="hidden xl:flex pt-6 flex-1 flex-wrap gap-2 w-1/2 my-2 mx-auto">
    <li
      v-for="item in filtres"
      :key="item.id"
      class="border border-cta-dark p-3 font-montserrat-light hover:bg-cta-light hover:text-white">
      <a
        :href="item.url"
        class="">
        {{ item.nom }}
      </a>
    </li>
  </ul>
</template>