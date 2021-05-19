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
         path: '/img/collagioPhoto/',
      },
      vfimages: [ 
          'collagio_wall_front.jpg', 
          'ambienti_asociacije.jpg',
          'ambienti_solucija.jpg',
          'ambienti_evolucija.jpg',
          'ambienti_interpretacija.jpg',
          'ambienti_parodija.jpg', 
          'ambienti_poklon.jpg',
          'ambienti_kompilacija.jpg',  
          'collagio_wall_back.jpg',
      ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         'Collagio Photo serigrafija',
         'Asociacija',
         'Solucija',
         'Evolucija',
         'Interpretacija',
         'Parodija',
         'Poklon',
         'Kompilacija',
         'Collagio Photo serigrafija',
      ],
   }),
}
</script>

<style lang="scss" scoped>

</style>