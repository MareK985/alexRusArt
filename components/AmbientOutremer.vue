<template>
    <div>
        <vue-flux
        :options="vfOptions"
        :images="vfimages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider">

            <template v-slot:preloader>
                <flux-preloader />
            </template>

            <template v-slot:caption>
                <flux-caption />
            </template>

            <template v-slot:controls>
                <flux-controls />
            </template>

            <template v-slot:pagination>
                <flux-pagination />
            </template>

            <template v-slot:index>
                <flux-index />
            </template>
        </vue-flux>

        <!-- <button @click="$refs.slider.show('next')">NEXT</button> -->
    </div>
</template>

<script>
import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      FluxPreloader,
   },

   data: () => ({
      vfOptions: {
         autoplay: true,
         path: '/img/outremer/',
      },
      vfimages: [ 
          'outremer_wall_front.jpg', 
          'cuba_wall.jpg',
          'zanzibar_wall.jpg',
          'zanzibar_wall2.jpg',
          'zanzibar_wall3.jpg',
          'sejk_wall.jpg', 
          'pristan_wall.jpg', 
          'plemena_wall.jpg',
          'outremer_wall_back.jpg', 
      ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         'Outremer serigrafija',
         'Živel Fidel',
         'Rajski Otoki',
         'Mwaka-kogwa',
         'V raj na Zanzibar dhovu',
         'Slani kruh',
         'Posel',
         'Outremer serigrafija',
      ],
   }),
}
</script>

<style lang="scss" scoped>

</style>