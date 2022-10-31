<!--
https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/
  left: 0;
  top: 100%;
   -->
<template>
  <nav class="h-8">
    <ul class="flex items-start gap-6 text-white font-montserrat-semi-bold">
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
        <ul class="invisible rounded-md group-hover:visible absolute bg-white font-montserrat-medium text-caractere px-3 py-1 top-11 transition-all duration-500 ease-in-out">
          <li class="before:triangle before:left-10 hover:text-cta-light">
            <a href="#" class="p-2">Découvrir</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#" class="p-2">Savourer</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#" class="p-2">Bouger</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#" class="p-2">Séjourner</a>
          </li>
        </ul>
      </li>
      <li class="border-transparent pb-2 nav-top">
        <a href="#">Pratique</a>
      </li>
      <li class="border-transparent pb-2 nav-top group relative">
        <a href="#" class="inline-flex items-center text-white">FR
          <svg class="text-white ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
          </svg>
        </a>
        <ul class="invisible rounded-md bg-white text-caractere my-4 h-24 absolute top-7 flex flex-col justify-center items-center group-hover:visible transition-all duration-500 ease-in-out">
          <li class="hover:text-cta-light before:triangle">
            <a href="#" class="p-4">FR</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#" class="p-4">NL</a>
          </li>
          <li class="hover:text-cta-light">
            <a href="#" class="p-4">EN</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<style>

li.nav-top {
  @apply transition-all duration-300 ease-in-out hover:border-b-4 hover:border-cta-light
}

.triangle {
  content: "";
  position: absolute;
  top: -6px;
  background-color: #fff;
  width: 15px;
  height: 15px;
  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  transform: rotate(135deg);
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
</style>
