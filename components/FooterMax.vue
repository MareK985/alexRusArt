<template>
    <div id="footer" class="pt-4 pt-md-5 bg">
      <div class="media-icons">
        <a href="https://www.facebook.com/maxzaxster"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="https://www.instagram.com/ateljemaxzaxster/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a v-on:click="$refs.aboutModal.open()"><font-awesome-icon :icon="['fas', 'info-circle']" /></a>
        <a href="mailto:info@maxzaxster.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div>
      <div id="contact" class="footer-text">
        <p>{{ $t('atelje') }} MAX ZAXSTER</p> 
        <p>{{ $t('copyright') }} &copy; {{ new Date().getFullYear() }} | 041 711 233 | info@maxzaxster.com</p>
      </div>
      <MareUXLogo2/>
    </div>
</template>

<script>

import MareUXLogo2 from '~/components/MareUXLogo2.vue'


export default {
    components: {
        MareUXLogo2
    }

}
</script>

<style lang="css" scoped>

.bg {
    background:  rgb(17, 17, 17);
    color: white;
    padding-bottom: 0.5em;
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}

.media-icons{
  /* position: absolute;  */
  bottom: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
   /* left: 50%; */
  /* transform: translateX(-50%); */
}

.media-icons a{
  position: relative;
  color: #fff;

  font-size: 25px;
  transition: 0.3s;
  transition-property: transform;
}

.media-icons a:not(:last-child){
  margin-right: 60px;
  color: #fff;

}

.media-icons a:hover{
  transform: scale(1.5);
  color: white;
}


@media only screen and (max-width: 749px) {
   .footer-text {
    line-height: 1.5em;
    font-size: 0.7em;
  }
}

@media only screen and (max-width: 500px) {
.bg {
padding-bottom: 4em;
}
}
</style>