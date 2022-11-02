<script setup>
const props = defineProps(['excerpt'])
</script>
<template>
  <div class="bg-party w-full">
    <div class="relative flex pt-6 px-6 py-12 xl:pb-20 lg:p-12 flex-wrap z-10 justify-end lg:justify-start mx-auto">
      <p class="text-lg xl:text-2xl text-white px-0" style="font-weight: 600;letter-spacing: 0.1rem; color:#808080FF;">
        {{ props.excerpt }}
      </p>
    </div>
  </div>
</template>