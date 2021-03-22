<template>
  <div>
    <HeroRosetti/>
    <section class="main-section">
      <div id="about">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <AboutRosetti/>
      </div>
      <br/>
      <div id="work">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('work') }}</h1>
        <br/>
        <PortofolioRosetti/>
      </div>
      <br/>
      <br/>
      <div id="ambient">
        <h1 class="main-title" data-aos="zoom-in">ambient</h1>
        <br/>
        <AmbientMario/>
      </div>
      <br/>
      <div id="testimonials">
        <br/>
        <h1 class="main-title" data-aos="zoom-in">{{ $t('testimonials') }}</h1>
        <br/>
        <TestiomonialsMario/>
      </div>
    </section>
    <FooterMario/>
  </div>
</template>

<script>
import HeroRosetti from '~/components/HeroRosetti.vue';
import AboutRosetti from '~/components/AboutRosetti.vue';
import PortofolioRosetti from '~/components/PortofolioRosetti.vue';
import FooterMario from '~/components/FooterMario.vue';
import TestiomonialsMario from '~/components/TestiomonialsMario.vue';
import AmbientMario from '~/components/AmbientMario.vue';



export default {
  components: {
    HeroRosetti,
    AboutRosetti,
    PortofolioRosetti,
    FooterMario,
    TestiomonialsMario,
    AmbientMario
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


</style>