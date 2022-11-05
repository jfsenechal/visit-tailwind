<template>
  <div
      class="bg-bglighter grid grid-cols-[repeat(auto-fill,minmax(4rem,auto))] md:grid-cols-[repeat(6,auto)] gap-3 justify-around items-center spa4ce-x-2 p-12 ">
    <a href="http://www.geoparkfamenneardenne.be/" class="">
      <img src="/images/geopark.jpg" alt="geopark"
           title="Geopark"
           class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
    <a href="https://www.famenneardenne.be/fr/" class="">
      <img src="/images/img_sponsor01.png" alt="adl"
           title="Agence de développement local"
           class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
    <a href="https://cap.marche.be/" class="">
      <img src="/images/img_sponsor02.png"
           title="Famenne Ardenne"
           alt="famenne ardenne" class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
    <a href="http://www.paysdefamenne.be/" class="">
      <img src="/images/img_sponsor03.png"
           alt="cap commerçants" class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
    <a href="https://www.marche.be/economie" class="">
      <img src="/images/img_sponsor04.png"
           alt="mcfa" class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
    <a href="http://mcfa.marche.be/" class="">
      <img src="/images/img_sponsor05.png"
           alt="pays famenne" class="h-16 grayscale hover:grayscale-0" loading="lazy"/>
    </a>
  </div>
</template>
<!--
<template>

  <script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.js"></script>

  <div
      x-data="{
        skip: 3,
        next() {
            this.to((current, offset) => current + (offset * this.skip))
        },
        prev() {
            this.to((current, offset) => current - (offset * this.skip))
        },
        to(strategy) {
            let slider = this.$refs.slider
            let current = slider.scrollLeft
            let offset = slider.firstElementChild.getBoundingClientRect().width
            slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
        },
        focusableWhenVisible: {
            'x-intersect:enter'() {
                this.$el.removeAttribute('tabindex')
            },
            'x-intersect:leave'() {
                this.$el.setAttribute('tabindex', '-1')
            },
        }
    }"
      class="flex flex-col w-full"
  >
    <div
        @keydown.right="next"
        @keydown.left="prev"
        tabindex="0"
        role="region"
        aria-labelledby="carousel-label"
        class="flex space-x-6"
    >
      <h2 id="carousel-label" class="sr-only" hidden>Carousel</h2>

      <button @click="prev" class="text-6xl">
        <span aria-hidden="true">❮</span>
        <span class="sr-only">Skip to previous slide</span>
      </button>

      <span id="carousel-content-label" class="sr-only" hidden>Carousel</span>

      <ul
          x-ref="slider"
          tabindex="0"
          role="listbox"
          aria-labelledby="carousel-content-label"
          class="flex w-full overflow-x-scroll"
          style="scroll-snap-type: x mandatory;"
      >
        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=1" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>

        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=2" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>

        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=3" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>

        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=4" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>

        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=5" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>

        <li style="scroll-snap-align: start;" class="w-1/3 flex-shrink-0 flex flex-col items-center justify-center p-2"
            role="option">
          <img class="mt-2 w-full" src="https://picsum.photos/400/200?random=6" alt="placeholder image">

          <button x-bind="focusableWhenVisible" class="px-4 py-2 text-sm">Do Something</button>
        </li>
      </ul>

      <button @click="next" class="text-6xl">
        <span aria-hidden="true">❯</span>
        <span class="sr-only">Skip to next slide</span>
      </button>
    </div>
  </div>
</template>
-->