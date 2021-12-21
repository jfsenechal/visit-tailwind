<template>
  <nav class="ml-au45to">
    <ul class="flex items-start gap-6">
      <li class="nav-top">
        <a href="#">Accueil</a>
      </li>
      <li class="nav-top">
        <a href="#">Inspirations</a>
      </li>
      <li class="nav-top">
        <a href="#">Agenda</a>
      </li>
      <li class="nav-top group relative">
        <a href="#" class="">S'organiser</a>
        <ul
            class="invisible group-hover:visible absolute bg-white text-black px-2 top-10 transition-all duration-500 ease-in-out">
          <li class="before:triangle before:left-10">Découvrir</li>
          <li>Savourer</li>
          <li>Bouger</li>
          <li>Séjourner</li>
        </ul>
      </li>
      <li class="nav-top">
        <a href="#">Pratique</a>
      </li>
    </ul>
  </nav>
  <div class="flex px-7 relative group">
    <a href="" class="text-white">FR</a>
    <ul class="invisible bg-white text-black h-20 absolute top-7 w-8 flex flex-col justify-center items-center group-hover:visible transition-all duration-500 ease-in-out">
      <li class="hover:text-cta-light before:triangle "><a href="#">FR</a></li>
      <li class="hover:text-cta-light"><a href="#">NL</a></li>
      <li class="hover:text-cta-light"><a href="#">EN</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style>


.tooltip:before {
  position: absolute;
  right: 100%;
}

.tooltip.to-right:before {
  /* Arrow code */
  position: absolute;
  right: auto;
  left: 100%;
}


</style>
