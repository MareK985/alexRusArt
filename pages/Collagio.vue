<template>
  <div>
    <HeroCollagio/>
    <!-- 1. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('asociacijaTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/asociacija_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('asociacija1') }} <br/>
        {{ $t('asociacija2') }} <br/>
        {{ $t('asociacija3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/asociacija.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('asociacijaTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 1. slika -->
    <br />
    <br />
    <br />
    <!-- 2. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('solucijaTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/solucija_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('solucija1') }} <br/>
        {{ $t('solucija2') }} <br/>
        {{ $t('solucija3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/solucija.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('solucijaTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 2. slika -->
    <br />
    <br />
    <br />
    <!-- 3. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('evolucijaTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/evolucija_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('evolucija1') }} <br/>
        {{ $t('evolucija2') }} <br/>
        {{ $t('evolucija3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/evolucija.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('evolucijaTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 3. slika -->
    <br />
    <br />
    <br />
    <!-- 4. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('interpretacijaTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/interpretacija_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('interpretacija1') }} <br/>
        {{ $t('interpretacija2') }} <br/>
        {{ $t('interpretacija3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/interpretacija.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('interpretacijaTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 4. slika -->
    <br />
    <br />
    <br />
    <!-- 5. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('parodijaTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/parodija_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('parodija1') }} <br/>
        {{ $t('parodija2') }} <br/>
        {{ $t('parodija3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/parodija.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('parodijaTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 5. slika -->
    <br />
    <br />
    <br />
    <!-- 6. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('poklonTitle') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/collagio/poklon_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('poklon1') }} <br/>
        {{ $t('poklon2') }} <br/>
        {{ $t('poklon3') }} 
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/collagio/poklon.jpg"
        alt="slide"
        class="responsive zoom slika"
      />

      <p class="slika-info">
        <strong>{{ $t('poklonTitle') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 200 x 70 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 6. slika -->
  </div>
</template>

<script>

import HeroCollagio from '~/components/HeroCollagio.vue';

export default {
  components: {
    HeroCollagio
  }
};
</script>

<style scoped>
@import "./../static/fonts/stylesheet.css";

.root {
  --gray: #757378;
}

.responsive {
  width: 100%;
  height: auto;
}

.picture-name {
  font-family: "alphacentaurimedium";
  font-size: 7vh;
  font-weight: bold;
  color: var(--gray);
  text-align: left;
  padding-bottom: 1em;
  line-height: 1.2em;
  padding-top: 1em;
}

.collagio-name {
  max-width: 400px;
}

.skica-container {
  text-align: center;
}
.skica-img {
  display: inline-block;
  max-width: 1000px;
  text-align: left;
  padding: 1em;
  margin: 0px;
  vertical-align: top;
}
.skica-text {
  display: inline-block;
  position: relative;
  overflow: hidden;
  max-width: 500px;
  max-height: 550px;
  text-align: justify;
  font-size: 3.5vh;
  line-height: 2em;
  padding: 5px;
  margin: 5px;
}
.skica-text .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;

  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, white);
}
.slika {
  margin-top: 6em;
  width: 80%;
  box-shadow: 10px 10px 5px var(--gray);
}
.slika-info {
  font-size: 1.4em;
  text-align: right;
  margin-right: 10%;
}
/* Style the tab */
li {
  font-size: 1.6em;
}
.attractionsDescription {
  color: var(--gray) !important;
  padding: 0;
  margin: 0;
  font-size: 0.865em;
  line-height: 180%;
}
@media screen and (max-width: 600px) {
  .picture-name {
    font-size: 5vh;
    line-height: 1em;
  }
  .skica-text {
    font-size: 2.5vh;
  }
  li {
    font-size: 1em;
    text-align: left !important;
  }
  .collagio-name {
    max-width: 130px;
  }
  .slika {
    margin-top: 2em;
    width: 90%;
    box-shadow: 5px 5px 2px var(--gray);
  }

  .slika-info {
    font-size: 0.8em;
    line-height: 1.2em;
    margin-right: 5%;
  }
}
</style>
