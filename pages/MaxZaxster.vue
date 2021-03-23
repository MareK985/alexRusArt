<template>
  <div>
    <HeroZaxster/>
    <section class="main-section">
      <br/>
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <AboutMax/>
      </div>
      <br/>
      <div id="seriographies">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('seriographies') }}</h1>
        <br/>
        <PortofolioMax/>
      </div>
      <br/>
      <br/>
      <div id="ambient">
        <h1 class="main-title" data-aos="zoom-in">ambient</h1>
        <br/>
        <AmbientCollagio/>
        <br/>
        <br/>
        <br/>
        <AmbientOutremer/>
      </div>
      <br/>
      <div id="testimonials">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('testimonials') }}</h1>
        <br/>
        <TestiomonialsMax/>
      </div>
    </section>
    <FooterMax/>
  </div>
</template>

<script>
import HeroZaxster from '~/components/HeroZaxster.vue';
import AboutMax from '~/components/AboutMax.vue';
import PortofolioMax from '~/components/PortofolioMax.vue';
import FooterMax from '~/components/FooterMax.vue';
import TestiomonialsMax from '~/components/TestiomonialsMax.vue';
import AmbientCollagio from '../components/AmbientCollagio.vue';
import AmbientOutremer from '../components/AmbientOutremer.vue';


    export default {
components: {
    HeroZaxster,
    AboutMax,
    PortofolioMax,
    FooterMax,
    TestiomonialsMax,
    AmbientCollagio,
    AmbientOutremer
  },
    computed: {
    navigationNext: function() { return `<font-awesome-icon icon="circle"/>` },
    navigationPrev: function() { return `<font-awesome-icon icon="circle"/>` },
}
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

.VueCarousel-dot-container {
  margin-top: 0px !important;
}

@media screen and (min-width: 900px) {
  #ambient {
   margin: 10px 50px;
  }
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

</style>