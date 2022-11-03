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
  getArticles();
});
</script>
<template>
  <ul class="pt-2 xl:pt-6 grid grid-cols-1 gap-1 xl:gap-2 xl:grid-cols-2 my-2">
    <li
        v-for="item in articles"
        :key="item.ID"
        class="group rounded-md shadow-md">
      <a :href="item.url" class="flex">
        <div
            class="flex flex-shrink-0 items-center justify-center rounded-l-md transition-all duration-500  group-hover:o44pacity-75"
        >
          <img :src="item.thumbnail_url" alt="img"
               class="h-28 w-28"/>
        </div>
        <div class="rounded-r-md border-t border-r border-b border-gray-200 bg-white w-full">
          <div class="flex h-full flex-col justify-between px-4 py-4 text-sm">
            <span class="block font-montserrat-semi-bold text-caractere group-hover:text-cta-light">
              {{ item.post_title }}
            </span>
            <p class="block font-montserrat-light text-caractere" v-html="item.excerpt"></p>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>