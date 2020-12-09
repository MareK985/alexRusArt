<template>
  <div>
    <Hero/>
    <section class="main-section">
      <div id="about"></div>
      <div id="seriographies"></div>
      <div id="testimonials"></div>
    </section>
    <Footer/>
    <!-- <footer id="contact">
      <div class="footer-text">
        HRIBERŠEK, tehnično svetovanje, Mitja Krajnc s.p.<br />
        {{ $t('copyright') }} 2020 | 041 763 005 | info@linking-map.com
      </div>
      <MareUXLogo />
    </footer> -->
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Footer from '~/components/Footer.vue';


export default {
  components: {
    Hero,
    Footer
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
