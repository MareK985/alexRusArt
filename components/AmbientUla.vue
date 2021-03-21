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

        <button @click="$refs.slider.show('next')">NEXT</button>
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
         path: '/img/ula/',
      },
      vfimages: [ 
          'ula_front_wall.jpg',
          'ula_artwork1_wall.jpg', 
          'ula_artwork2_wall.jpg',
          'ula_artwork3_wall.jpg', 
          'ula_artwork4_wall.jpg',
          'ula_artwork5_wall.jpg', 
          'ula_artwork6_wall.jpg',
          'ula_back_wall.jpg',

      ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         '',
         'Mrtva reka',
         'Vzporedni svetovi',
         'Vročina iz pekla',
         'Zimski piš',
         '',
         '',
         '',
     ],
   }),
}
</script>

<style lang="scss" scoped>

</style>