<!--
https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/
  left: 0;
  top: 100%;
   -->
<template>
  <nav class="h-8">
    <ul class="flex items-start gap-6 text-white font-medium text-xl">
      <li class="border-transparent pb-2 nav-top">
        <a href="#">Accueil</a>
      </li>
      <li class="border-transparent pb-2 nav-top">
        <a href="#">Inspirations</a>
      </li>
      <li class="border-transparent pb-2 nav-top">
        <a href="#">Agenda</a>
      </li>
      <li class="border-transparent pb-2 nav-top group relative">
        <a href="#" class="">S'organiser</a>
        <ul class="invisible rounded-md group-hover:visible absolute bg-white font-medium text-black px-3 py-1 top-11 transition-all duration-500 ease-in-out">
          <li class="before:triangle before:left-10 hover:text-cta-light">
            <a href="#">Découvrir</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#">Savourer</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#">Bouger</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#">Séjourner</a>
          </li>
        </ul>
      </li>
      <li class="border-transparent pb-2 nav-top">
        <a href="#">Pratique</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style>
/*
<!-- triangle
.tooltip:before {
  position: absolute;
  right: 100%;
}

.tooltip.to-right:before {
  position: absolute;
  right: auto;
  left: 100%;
}
-->
*/
</style>
