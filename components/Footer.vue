<template>
    <div id="footer" class="pt-4 pt-md-5 bg">
      <div id="contact" class="footer-text">
        <img src="../assets/img/mz_logo_NOV.png" alt="logo" width="80" height="80"> 
        <p>Atelje MAX ZAXSTER</p> 
        <p>Copyright &copy; {{ new Date().getFullYear() }} | 041 711 233 | info@maxzaxster.com</p>
      </div>
      <MareUXLogo/>
    </div>
</template>

<script>

import MareUXLogo from '~/components/MareUXLogo.vue'


export default {
    components: {
        MareUXLogo
    }

}
</script>

<style lang="css" scoped>

.bg {
    background: rgb(65,65,65) !important;
    color: white;
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
    line-height: 1.6em;
  }
}
</style>