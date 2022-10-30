<template>
  <div class="inspiration grid grid-cols-3 grid-rows-2 gap-1">
    <div class="child bg-chasse col-span-2">
      <figure class="grid">
        <img class="col-start-1 col-end-2 row-start-1 row-end-2" src="https://picsum.photos/600/400" alt="">
        <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
          lines or more.
        </figcaption>
      </figure>
    </div>
    <div class="child bg-noel">
      <figure class="grid">
        <img class="col-start-1 col-end-2 row-start-1 row-end-2" src="https://picsum.photos/600/400" alt="">
        <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
          lines or more.
        </figcaption>
      </figure>
    </div>
    <div class="child bg-escape">
      <figure class="grid">
        <img class="col-start-1 col-end-2 row-start-1 row-end-2" src="https://picsum.photos/600/400" alt="">
        <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
          lines or more.
        </figcaption>
      </figure>
    </div>
    <div class="child bg-totemus row-start-2 col-start-2 col-span-2">
      <figure class="grid">
        <img class="col-start-1 col-end-2 row-start-1 row-end-2" src="https://picsum.photos/600/400" alt="">
        <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
          lines or more.
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<template>

  <!-- https://play.tailwindcss.com/KIS7AxgbVl test avec bg image -->
  <!-- over en flex
  https://play.tailwindcss.com/rLUYCIXqwt?size=1158x735
   https://play.tailwindcss.com/rLUYCIXqwt?size=1158x735
   -->


  <!-- test -->
  <div class="hover:bg-pink-200 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden bg-transparent">
    <figure class="grid">
      <img
          class="mix-blend-overlay absolute inset-0 w-full h-full object-cover col-start-1 col-end-2 row-start-1 row-end-2"
          src="https://images.unsplash.com/photo-1552318317-ee6689754024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          alt=""/>
      <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
        lines or more.
      </figcaption>
    </figure>
  </div>

  <!-- test -->
  <div class="relative ">
    <a class="absolute inset-0 z-10 bg-pink-200 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-30 duration-300">
      <h1 class=tracking-wider>Title</h1>
      <p class="mx-auto">Description</p>
    </a>
    <a href="#" class="relative">
      <div class="h-48 flex flex-wrap content-center">
        <img src="https://picsum.photos/600/400" class="mx-auto  " alt="">
      </div>
    </a>
  </div>

  <!-- test effect correcte zoom et rose -->
  <div class="hover:bg-cta-over relative h-48 max-w-full overflow-hidden transition-all duration-500">
    <figure class="grid">
      <img
          class="mix-blend-lighten absolute inset-0 w-full h-full object-cover col-start-1 col-end-2 row-start-1 row-end-2 hover:scale-110 transition-all duration-500"
          src="https://picsum.photos/800" alt=""/>
      <figcaption class="col-start-1 col-end-2 row-start-1 row-end-2 self-end">This is a long caption flowing into two
        lines or more.
      </figcaption>
    </figure>
  </div>
</template>