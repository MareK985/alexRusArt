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
         path: '/img/mario/',
      },
      vfimages: [ 
          'ambient_mario_front.jpg', 
          'ambient_motokros.jpg', 
          'ambient_rossi.jpg',
          'ambient_zaba.jpg',
          'ambient_mario_back.jpg', 

      ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         'Mario Rosetti',
         'Ognjeno blato',
         'Bencinska ekstaza',
         'Žaba',
         '',
      ],
   }),
}
</script>

<style lang="scss" scoped>

</style>