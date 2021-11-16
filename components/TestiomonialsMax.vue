<template>
  <div class="content">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="quote-card">
        <img
          src="~assets/img/testimonials/testimonial-MK.jpg"
          alt="slide"
          class="quote-img responsive"
        >
        <p class="quote">
          {{ $t('quote6') }}
        </p>
        <br>
        <p class="quote-name">
          {{ $t('quoteAuthor6') }}
        </p>
      </div>
      <div class="quote-card">
        <img
          src="~assets/img/testimonials/testimonial-maja-pravnica.jpg"
          alt="slide"
          class="quote-img responsive"
        >
        <p class="quote">
          {{ $t('quote2') }}
        </p>
        <br>
        <p class="quote-name">
          {{ $t('quoteAuthor2') }}
        </p>
      </div>
      <div class="quote-card">
        <img
          src="~assets/img/testimonials/testimonial-pecenik.jpg"
          alt="slide"
          class="quote-img responsive"
        >
        <p class="quote">
          {{ $t('quote3') }}
        </p>
        <br>
        <p class="quote-name">
          {{ $t('quoteAuthor3') }}
        </p>
      </div>
      <div class="quote-card">
        <img
          src="~assets/img/testimonials/testimonial-formawood1.jpg"
          alt="slide"
          class="quote-img responsive"
        >
        <p class="quote">
          {{ $t('quote1') }}
        </p>
        <br>
        <p class="quote-name">
          {{ $t('quoteAuthor1') }}
        </p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	components: {
		VueSlickCarousel
	}
}
</script>

<style lang="css" scoped>

.content {
    margin: auto;
    padding: 20px;
    width: 80%;
}

.responsive {
  width: 40%;
  margin: 4% 30% 0% 10%;
}

.quote-card {
    background: rgb(19, 19, 19) !important;
    margin: 5% 10%;
    width: 80%;
}
.quote {
  font-size: 3.3vh;
  font-style: italic;
  color: rgba(255,255,255, 0.77);
  text-align: justify;
  line-height: 1.5em;
  padding: 2% 10%;
}

.quote-name {
  color: rgba(255,255,255, 0.77);
  font-size: 4vh;
  text-align: left;
  padding: 0% 10% 5% 10%;
}
@media only screen and (max-width: 749px) {
  .responsive {
  width: 80%;
  margin: 4% 10%;
}

.quote-card {
    margin: auto;
    width: 90% !important;
}

 .quote {
    font-size: 2.7vh;
    text-align: justify;
    line-height: 1.4em;
    margin-top: 1em;
    padding: 20px 20px 0px 20px;
  }
    .quote-name {
    font-size: 3.5vh;
    text-align: left;
    padding: 0px 20px 20px 20px;
  }
}

@media only screen and (max-width: 480px) {
  .content {
    padding: 0px;
}
}

</style>
