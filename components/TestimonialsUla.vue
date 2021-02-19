<template>
    <div class="testimonials">
      <VueSlickCarousel v-bind="settings">
        <div class="quote-card">
            <img
                src="~assets/img/testimonials/testimonial-ulaRudi.jpg"
                alt="slide"
                class="quote-img responsive"
            />
            <p class="quote">
            {{ $t('testimonialUla1') }}
            </p>
            <br />
            <p class="quote-name">{{ $t('testimonialUlaAuthor1') }}</p>
        </div>
        <!-- <div class="quote-card">
            <img
                src="~assets/img/testimonials/testimonial-pecenik.jpg"
                alt="slide"
                class="quote-img responsive"
            />
            <p class="quote">
            {{ $t('quote2') }}
            </p>
            <br />
            <p class="quote-name">{{ $t('quoteAuthor2') }}</p>
        </div>
        <div class="quote-card">
            <img
                src="~assets/img/testimonials/testimonial-pecenik.jpg"
                alt="slide"
                class="quote-img responsive"
            />
            <p class="quote">
            {{ $t('quote3') }}
            </p>
            <br />
            <p class="quote-name">{{ $t('quoteAuthor3') }}</p>
        </div>  -->

      </VueSlickCarousel>
    </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: {
        VueSlickCarousel
  },
    data() {
      return {
        settings: {
          "accessibility": false,
          "dots": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "adaptiveHeight": true
        }
      }
    },
  
    }
</script>

<style lang="css" scoped>

.responsive {
  width: 40%;
  margin: 4% 30% 0% 10%;
}

.quote-card {
    background: rgb(19, 19, 19) !important;
    margin: 5% 10%;
    width: 80% !important;
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
    margin: 10px;
    width: 100% !important;

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

</style>