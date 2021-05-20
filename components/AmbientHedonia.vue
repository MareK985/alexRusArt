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
         path: '/img/hedonia/',
      },
      vfimages: [ 
          'ambienti_hedonija_front.jpg', 
          'partitura_ambienti.jpg',
          'skriti_kot_ambienti.jpg',
          'intermezzo_ambienti.jpg',
          'soirea_ambienti.jpg',
          'dnevnik_vagabunda_ambienti.jpg',
          'prva_violina_ambienti.jpg', 
          'evina_skusnjava_ambienti.jpg', 
          'dvojniC_ambienti.jpg',
          'socnaKomozicija_ambienti.jpg',
          'zlateSanje_ambienti.jpg',
          'prva_liga_ambienti.jpg',
          'sladko_zivljenje_ambienti.jpg', 
          'in_vinoVeritas_ambienti.jpg', 
          'vinskaMati_ambienti.jpg', 
          'ambienti_hedonija_back.jpg',
      ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: [
         'Hedonija serigrafija',
         'Partitura za užitek',
         'Skriti kot',
         'Intermezzo',
         'Soirea',
         'Dnevnik vagabunda',
         'Prva violina',
         'Evina skušnjava',
         'Dvojni C',
         'Sočna kompozicija',
         'Zlate sanje',
         'Prva liga',
         'Sladko življenje',
         'In vino veritas',
         'Vinska mati',
         'Hedonija serigrafija',
      ],
   }),
}
</script>

<style lang="scss" scoped>

</style>