<template>
  <div id="footer" class="pt-4 pt-md-5 bg">
    <div id="contact" class="footer-text">
      <p>{{ $t('atelje') }} MAX ZAXSTER</p>
      <p>{{ $t('copyright') }} &copy; {{ new Date().getFullYear() }} | 041 711 233 | info@maxzaxster.com</p>
    </div>
    <MareUXLogo2 />
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
