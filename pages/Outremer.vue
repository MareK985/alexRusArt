<template>
  <div>
    <HeroOutremer/>
    <!-- 1. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('cuba') }} 
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/zivelFidel_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/zivelFidel.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('cuba') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 1. slika -->
    <br />
    <br />
    <!-- 2. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('otoki') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/rajskiOtoki_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/rajskiOtoki.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('otoki') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 2. slika -->
    <br />
    <br />
    <!-- 3. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
    {{ $t('zanzibar') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/mwakaKogwa_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
          <br />
          <br />
          S to sliko želi avtor signifikantno opozoriti umetniški svet na svoj
          osebni izbor in simpatijo. Upodobljeni motivi slikarjev so znani po
          vsem svetu, zato ni bojazni, da ob prvem pogledu na sliko gledalec ne
          bi vedel za katerega umetnika gre.
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/mwakaKogwa.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('zanzibar') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 3. slika -->
    <br />
    <br />
    <!-- 4. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('slaniKruh') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/slaniKruh_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
          <br />
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/slaniKruh.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('slaniKruh') }} I</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 4. slika -->
    <br />
    <br />
    <!-- 5. slika -->
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/slaniKruh2_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
          <br />
          <br />
          <br />
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/slaniKruh2.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('slaniKruh') }} II</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 5. slika -->
    <br />
    <br />
    <!-- 6. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
        {{ $t('sejk') }}    
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/outremer/posliSejkaBenSlimane_skice.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
      <!-- <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum
          unde laboriosam itaque necessitatibus sint error temporibus, mollitia
          officia ipsum distinctio, culpa fugit rem nobis pariatur tempore nihil
          architecto suscipit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo rerum unde laboriosam itaque necessitatibus sint error
          temporibus, mollitia officia ipsum distinctio, culpa fugit rem nobis
          pariatur tempore nihil architecto suscipit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo rerum unde laboriosam itaque
          necessitatibus sint error temporibus, mollitia officia ipsum
          distinctio, culpa fugit rem nobis pariatur tempore nihil architecto
          suscipit.
          <br />
          <br />
          <br />
        </p>
        <p class="read-more">
          <a class="button" @click="showModal">Preberi celo zgodbo...</a>
        </p>
      </div> -->
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/outremer/posliSejkaBenSlimane.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('sejk') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 180 x 90 cm <br />
        {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 6. slika -->
  </div>
</template>

<script>

import HeroOutremer from '~/components/HeroOutremer.vue';

export default {
    components: {
     HeroOutremer
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

.picture-name2 {
  font-family: "UltimaProBlack";
  font-size: 7vh;
  font-weight: bold;
  color: #757378;
  text-align: center;
  line-height: 1.2em;
  padding-top: 1em;
}

.collagio-name {
  max-width: 180px;
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

.slika2 {
  margin-top: 6em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  box-shadow: 10px 10px 5px var(--gray);
}

.slika-info2 {
    font-size: 1.4em;
    text-align: right;
    margin-right: 20%;
    margin-top: 0.7em;
}
/* Style the tab */
li {
  font-size: 1.6em;
}
.attractionsDescription {
  padding: 0;
  margin: 0;
  font-size: 0.865em;
  line-height: 180%;
}
@media screen and (max-width: 600px) {
  .picture-name2 {
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

  .slika2 {
    margin-top: 2em;
    width: 90%;
    box-shadow: 5px 5px 2px grey;
  }

  .slika-info2 {
    font-size: 0.8em;
    line-height: 1.2em;
    margin-right: 5%;
  }
}
</style>
