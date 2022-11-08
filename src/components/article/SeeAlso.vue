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
</script>
<template>
  <div class="my-6">
    <h4 class="font-montserrat-bold text-caractere text-lg">Recommandations</h4>
    <div class="mt-6">
      <ul role="list" class="mt-3 flex flex-col">
        <li v-for="item in articles.slice(0,3)" :key="item.ID"
            class="group rounded-md shadow-lg mb-2">
          <a href="#" class="flex">
            <div
                class="flex flex-shrink-0 items-center justify-center rounded-l-md transition-all duration-500 group-hover:opacity-75"
            >
              <img :src="item.thumbnail_url" alt=""
                   class="h-28 w-28 aspect-square" loading="lazy"/>
            </div>
            <div class="rounded-r-md border-t border-r border-b border-gray-200 bg-white w-full">
              <div class="flex h-full flex-col justify-between px-4 py-4 text-sm">
                <span class="block font-montserrat-semi-bold text-caractere group-hover:text-cta-light">
                  {{ item.post_title }}
                </span>
                <div class=" flex flex-row gap-2">
                    <span class="font-montserrat-light text-caractere"
                          v-for="tag in item.tags" :key="tag.id">
                          {{ item.tag }}
                    </span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
