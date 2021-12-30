<template>
  <div>
    <Hero />
    <section class="main-section">
      <br>
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">
          My Story
        </h1>
        <About />
      </div>
      <br>
      <div id="seriographies">
        <br>
        <h1 class="main-title" data-aos="zoom-in">
          My Art
        </h1>
        <br>
        <Portofolio />
      </div>
      <br>
      <!-- <div id="testimonials">
        <br>
        <h1 class="main-title" data-aos="zoom-in">
          {{ $t('testimonials') }}
        </h1>
        <br>
        <Testiomonials />
      </div> -->
    </section>
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Portofolio from '~/components/Portofolio.vue'
import Footer from '~/components/Footer.vue'
// import Testiomonials from '~/components/Testiomonials.vue'

export default {
	components: {
		Hero,
		About,
		Portofolio,
		Footer
		// Testiomonials
	},
	computed: {
		navigationNext () { return '<font-awesome-icon icon="circle"/>' },
		navigationPrev () { return '<font-awesome-icon icon="circle"/>' }
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
  background-color: #222222;
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
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
