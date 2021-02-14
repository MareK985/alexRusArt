<template>
  <div>
    <Hero class="pt"/>
    <!-- <section class="main-section">
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">{{ $t('about') }}</h1>
        <About/>
      </div>
      <br/>
    </section> -->
    <Footer/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
// import About from '~/components/About.vue';
import Footer from '~/components/Footer.vue';


export default {
  components: {
    Hero,
      // About,
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

<style lang="scss" scoped>
@import "./../static/fonts/stylesheet.css";
/* @import "./../css/style.css"; */

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  background:  rgb(29, 28, 28);
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

.pt {
  padding-top: 0px;
}

// media queries for common device breakpoints 

//Galaxy Fold //
@media only screen and (min-device-width : 270px) and (max-device-width : 280px) {
.pt {
  padding-top: 0px;
}
}
//
@media only screen and (min-device-width : 281px) and (max-device-width : 320px) {
.pt {
  padding-top: 0px;
}
}
//iPhone 5 //
@media only screen and (min-device-width : 321px) and (max-device-width : 359px) and (orientation : portrait)  {
.pt {
  padding-top: 0px;
}
}
//Galaxy S5/S8/Moto S4 //
@media only screen and (min-device-width : 360px) and (max-device-width : 374px) and (orientation : portrait)  {
.pt {
  padding-top: 20px;
}
}
//iPhone 6/7/8/X/11Pro/12 Mini //
@media only screen and (min-device-width : 375px) and (max-device-width : 389px) and (orientation : portrait)  {
.pt {
  padding-top: 60px;
}
}
//iPhone 12/12Pro //
@media only screen and (min-device-width : 390px) and (max-device-width : 413px) and (orientation : portrait)  {
.pt {
  padding-top: 0px;
}
}
//iPhone 6/7/8 Plus/11 //
@media only screen and (min-device-width : 414px) and (max-device-width : 440px) and (orientation : portrait)  {
.pt {
  padding-top: 60px;
}
}

/* //  CSS media queries to target Apple's 2019 and 2020 devices

// iPhone 12 Mini, iPhone 11 Pro, iPhone Xs, and iPhone X
// @media only screen 
//     and (device-width: 375px) 
//     and (device-height: 812px) 
//     and (-webkit-device-pixel-ratio: 3) { }

// iPhone 12 and iPhone 12 Pro
// @media only screen 
//     and (device-width: 390px) 
//     and (device-height: 844px) 
//     and (-webkit-device-pixel-ratio: 3) { }

// iPhone 12 Pro Max
// @media only screen 
//     and (device-width: 428px) 
//     and (device-height: 926px) 
//     and (-webkit-device-pixel-ratio: 3) { }

// iPhone 11 and iPhone XR
// @media only screen 
//     and (device-width: 414px) 
//     and (device-height: 896px) 
//     and (-webkit-device-pixel-ratio: 2) { }

//  iPhone 12 Mini, iPhone 11 Pro, iPhone Xs, and iPhone X
//  @media only screen 
//     and (device-width: 375px) 
//     and (device-height: 812px) 
//     and (-webkit-device-pixel-ratio: 3) { }

// iPhone 11 Pro Max and iPhone Xs Max
// @media only screen 
//     and (device-width: 414px) 
//     and (device-height: 896px) 
//     and (-webkit-device-pixel-ratio: 3) { } */

</style>
