<template>
    <div class="testimonials">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="quote-card">
            <img
                src="~assets/img/collagio/asociacija.jpg"
                alt="slide"
                class="quote-img responsive"
            />
            <p class="quote">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
                est architecto commodi consequuntur amet, illo expedita, qui quod,
                veniam sed nisi quaerat? Nemo praesentium necessitatibus provident
                iste repellat veniam quia!
            </p>
            <br />
            <p class="quote-name">Matej Novak, Firma d.o.o.</p>
        </div>
        <!-- <div class="quote-card">
            <img
                src="~assets/img/collagio/asociacija.jpg"
                alt="slide"
                class="quote-img responsive"
            />
            <p class="quote">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
                est architecto commodi consequuntur amet, illo expedita, qui quod,
                veniam sed nisi quaerat? Nemo praesentium necessitatibus provident
                iste repellat veniam quia!
            </p>
            <br />
            <p class="quote-name">Matej Novak, Firma d.o.o.</p>
        </div> -->

      </VueSlickCarousel>
    </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: {
        VueSlickCarousel
  },
    }
</script>

<style lang="css" scoped>

.responsive {
  width: 100%;
  height: auto;
}

.quote-card {
    background: rgb(80, 79, 79) !important;
    margin: 100px;
    right: 0;
}
.quote {
  font-size: 3.5vh;
  color: rgba(255,255,255, 0.77);
  text-align: justify;
  line-height: 1.7em;
  margin-top: 2em;
  padding-left: 200px;
  padding-right: 200px;
}

.quote-name {
  font-size: 4vh;
  text-align: left;
  padding-left: 200px;
  padding-right: 200px;
}
@media only screen and (max-width: 749px) {
.quote-card {
    margin: 10px;
}

 .quote {
    font-size: 2.7vh;
    text-align: justify;
    line-height: 1.4em;
    margin-top: 1em;
    padding: 20px;
  }
    .quote-name {
    font-size: 3.5vh;
    text-align: left;
    padding: 20px;
  }
}

</style>