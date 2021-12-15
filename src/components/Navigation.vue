<template>
  <ul class="lg:flex">
    <li class="nav-top">
      <a href="#">Accueil</a>
    </li>
    <li class="nav-top">
      <a href="#">Inspirations</a>
    </li>
    <li class="nav-top">
      <a href="#">Agenda</a>
    </li>
    <li class="nav-top">
      <a href="#">S'organiser</a>
    </li>
    <li class="nav-top">
      <a href="#">Pratique</a>
    </li>
  </ul>
  <div class="flex lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>
