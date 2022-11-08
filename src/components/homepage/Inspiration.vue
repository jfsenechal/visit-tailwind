<script setup>
import {onMounted, ref} from "vue";
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
  getArticles()
});

function isEven(i) {
  return i === 0 || i === 3
}
</script>
<template>
  <h2
      class="py-2 px-4 text-center font-montserrat-bold text-2xl text-grey-dark lg:text-left xl:p-4"
  >
    Inspirations
  </h2>
  <div class="grid grid-cols-1 px-4 xl:grid-cols-3 xl:grid-rows-2 gap-2">
    <div
        v-for="(item,index) in articles.slice(0,4)"
        :key="item.ID"
        class="bg-cta-dark hover:bg-cta-hover relative rounded-md h-48 max-w-full overflow-hidden transition-all duration-500"
        :class="{'xl:col-span-2': isEven(index)}">
      <div
          class="bg-cover bg-center y grid place-items-center h-full"
      >
        <h3 class="m-0 p-2 text-white text-xl ">
          <a :href="item.url">{{ item.post_title }}</a>
        </h3>
      </div>
    </div>
  </div>
  <a
      class="ml-auto mr-2 flex block w-72 items-center justify-center pt-4 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
      href="/"
      title="Toutes les inspirations"
  >
    Toutes les inspirations
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>
  </a>
</template>
<style>
/*
 deux calques en absolu :-(
 sur image a applique  */

figcaption {
  @apply bg-caractere bg-opacity-60 text-white p-4;
}

.y {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
}

.x {
  background: linear-gradient(180deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}
</style>