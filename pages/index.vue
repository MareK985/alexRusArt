<template>
  <div>
    <header></header>
    <section id="about"></section>
    <section id="seriographies"></section>
    <section id="testimonials"></section>
    <footer id="contact">
      <div class="footer-text">
        HRIBERŠEK, tehnično svetovanje, Mitja Krajnc s.p.<br />
        <!-- {{ $t('copyright') }} 2020 | 041 763 005 | info@linking-map.com -->
      </div>
      <MareUXLogo />
    </footer>
  </div>
</template>

<script>
import MareUXLogo from '~/components/MareUXLogo.vue'
import LangNavigation from "~/components/LangNavigation.vue";


export default {
  components: {
    LangNavigation,
    MareUXLogo
  },
    nuxtI18n: {
    paths: {
      sl: "/",
      en: "/",
    },
  },
}
</script>

<style>

@media screen and (max-width: 600px) {
  .footer-text {
    line-height: 1.6em;
  }
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}

</style>
