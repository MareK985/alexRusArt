<template>
  <div>
    <Hero/>
    <section class="main-section">
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <About/>
      </div>
      <br/>
      <div id="seriographies">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('seriographies') }}</h1>
        <Portofolio/>
      </div>
      <br/>
      <div id="testimonials">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('testimonials') }}</h1>
        <br/>
        <Testiomonials/>
      </div>
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
import About from '../components/About.vue';
import Portofolio from '../components/Portofolio.vue';
import Footer from '~/components/Footer.vue';
import Testiomonials from '../components/Testiomonials.vue';


export default {
  components: {
    Hero,
      About,
      Portofolio,
      Footer,
      Testiomonials

  },
    nuxtI18n: {
    paths: {
      sl: "/",
      en: "/",
    },
  },
}
</script>

<style lang="css" scoped>
@import "./../static/fonts/stylesheet.css";
/* @import "./../css/style.css"; */

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url(~assets/img/bg_1.jpg);
  background-repeat: repeat-y;
}
.main-title {
  font-family: "TrojanProBold", Arial, sans-serif !important;
  font-size: 6vw;
  font-weight: 600;
  padding-top: 0.5em;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 600px) {
  .main-title {
    font-size: 8.5vw;
    letter-spacing: 0.1em;
  }
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
