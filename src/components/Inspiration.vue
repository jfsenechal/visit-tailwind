<script setup>
import {onMounted, ref} from "vue";
import {items} from "@/data/posts"

const articles = ref([]);

function getArticles() {
  fetch("https://visitmarche.be/api/posts.php?id=2")
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        articles.value = data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
}

onMounted(() => {

});

function isEven(i) {
  return i === 0 || i === 3
}
</script>
<template>
  <h2
      class="py-2 px-4 text-center font-montserrat-bold text-2xl text-grey-dark lg:text-left xl:p-4"
  >
    Inspiration
  </h2>
  <div class="grid grid-cols-3 grid-rows-2 gap-2">
    <div
        v-for="(item,index) in items"
        :key="item.ID"
        class="hover:bg-cta-hover relative h-48 max-w-full overflow-hidden transition-all duration-500"
        :class="{'col-span-2': isEven(index)}">
      <figure class="grid">
        <img
            class="mix-blend-lighten absolute inset-0 w-full h-full object-cover col-start-1 col-end-2 row-start-1 row-end-2 hover:scale-110 transition-all duration-500"
            :src="item.thumbnail_url" alt=""/>
        <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">
          {{ item.post_title }} {{ index }} {{ index % 2 }}
        </figcaption>
      </figure>
    </div>
  </div>
  <a
      class="ml-auto mr-2 block block w-72 items-center justify-center pt-4 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
      href="/"
      title="Plus d'actualités"
  >
    Toutes les inspirations
    <i class="fa fa-chevron-right ml-4 h-16 w-16" aria-hidden="true"></i>
  </a>
</template>
<style>
/*
 deux calques en absolu :-(
 sur image a applique  */

.x {
  background: linear-gradient(180deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>