<template>
  <div>
    <HeroUla/>
    <section class="main-section">
      <br/>
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <AboutUla/>
      </div>
      <br/>
      <div id="work">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('work') }}</h1>
        <br/>
        <PortofolioUla/>
      </div>
      <br/>
      <div id="ambient">
        <h1 class="main-title" data-aos="zoom-in">ambient</h1>
        <br/>
        <AmbientUla/>
      </div>
      <br/>
      <div id="testimonials">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('testimonials') }}</h1>
        <br/>
        <TestimonialsUla/>
      </div>
    </section>
    <FooterMario/>
  </div>
</template>

<script>
import HeroUla from '~/components/HeroUla.vue';
import AboutUla from '~/components/AboutUla.vue';
import PortofolioUla from '~/components/PortofolioUla.vue';
import FooterMario from '~/components/FooterMario.vue';
import TestimonialsUla from '~/components/TestimonialsUla.vue';
import AmbientUla from '~/components/AmbientUla.vue';


export default {
  components: {
    HeroUla,
    AboutUla,
    PortofolioUla,
    FooterMario,
    TestimonialsUla,
    AmbientUla
  },
}
</script>

<style lang="scss" scoped>
@import "./../static/fonts/stylesheet.css";
/* @import "./../css/style.css"; */

.responsive {
  width: 100%;
  padding: 10px 100px;
}

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  background-image: url(~assets/bg/usnje_bg1.jpg);
  // background-repeat: repeat-y;
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

@media screen and (min-width: 900px) {
  #ambient {
   margin: 10px 50px;
  }
}
 
@media screen and (max-width: 600px) {
  .main-title {
    font-size: 8.5vw;
    letter-spacing: 0.1em;
  }
  .footer-text {
    line-height: 1.6em;
  }
  .responsive {
  padding: 10px;
}
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}

//iPhone 5 //
@media only screen and (min-device-width : 321px) and (max-device-width : 359px) and (orientation : portrait)  {
header h2 {
    font-size: 1.3em;
}

.languageToggle[data-v-321ff2c5] {
    right: 20px;
}
}

</style>