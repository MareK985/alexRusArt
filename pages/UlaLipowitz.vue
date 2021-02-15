<template>
  <div>
    <HeroUla/>
    <section class="main-section">
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <AboutUla/>
      </div>
      <br/>
      <div id="seriographies">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('work') }}</h1>
        <PortofolioUla/>
      </div>
      <br/>
      <!-- <div id="testimonials">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('testimonials') }}</h1>
        <br/>
        <TestiomonialsUla/>
      </div> -->
    </section>
    <FooterMario/>
  </div>
</template>

<script>
import HeroUla from '~/components/HeroUla.vue';
import AboutUla from '~/components/AboutUla.vue';
import PortofolioUla from '~/components/PortofolioUla.vue';
import FooterMario from '~/components/FooterMario.vue';
// import TestiomonialsUla from '~/components/TestiomonialsUla.vue';


export default {
  components: {
    HeroUla,
    AboutUla,
    PortofolioUla,
    FooterMario
    // TestiomonialsUla
  },
}
</script>

<style lang="scss" scoped>
@import "./../static/fonts/stylesheet.css";
/* @import "./../css/style.css"; */

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  background-image: url(~assets/bg/usnje_bg1.jpg);
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