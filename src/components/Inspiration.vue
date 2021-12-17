<template>
  <div class="inspiration grid grid-cols-3 grid-rows-2 gap-1">
    <div class="child bg-chasse col-span-2">
      <h3>Période de chasse</h3>
    </div>
    <div class="child bg-noel">
      <h3>Noël à Marche</h3>
    </div>
    <div class="child bg-escape">
      <h3>ESCAPE ROOM le dernier rempart</h3>
    </div>
    <div class="child bg-totemus row-start-2 col-start-2 col-span-2">
      <h3>Totemus: le charme intra-muros</h3>
    </div>
  </div>
</template>
<style>
/*
 deux calques en absolu :-(
 sur image a applique  */

.x {
  background: linear-gradient(180deg, rgba(77, 77, 77, 0.35), rgba(231, 218, 203, 0.35));
}

/* en over */
.y {
  background-color: rgba(253,131,131,.55);
}

/* effet de zoom .bg-img-size-hover-110 */
.bg-img_hover  {
  width: calc(1% * 110) !important;
  margin-left: calc(50% - (1% * 110 / 2));
  margin-right: calc(50% - (1% * 110 / 2));
}

</style>