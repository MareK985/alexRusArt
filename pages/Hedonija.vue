<template>
  <div>
    <HeroHedonija/>
    <div class="about-container">        
      <div 
        class="about-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in">
          <img class="responsive" src="~assets/img/hedonizem/hedonija_prolog.jpg" />
      </div>
      <div class="about-text" data-aos="fade-up" data-aos-duration="1500"> 
        <p class="predgovor">{{ $t('prologHedonija1') }}</p>
        <p class="predgovor">{{ $t('prologHedonija2') }}</p>
        <p class="read-more">
          <a v-on:click="$refs.about.open()">{{ $t('readMore') }}</a>
        </p>
      </div>
      <sweet-modal ref="about" modal-theme="dark" overlay-theme="dark">
        <p>{{ $t('prologHedonija1') }}</p>
        <p>{{ $t('prologHedonija2') }}</p>
          <p class="read-more">
            <a class="button" v-on:click="$refs.about.close()">{{ $t('back') }}</a>
          </p> 
      </sweet-modal>
    </div>
    <!-- 1. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('scoreForPleasure') }} 
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/scoreForPleasure_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/scoreForPleasure.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('scoreForPleasure') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 50 x 70 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2012
      </p>
    </div>
    <!-- END OF 1. slika -->
    <br />
    <br />
    <!-- 2. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('intermezzo') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/intermezzo_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/intermezzo.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('intermezzo') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 40 x 40 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2012
      </p>
    </div>
    <!-- END OF 2. slika -->
    <br />
    <br />
    <!-- 3. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
    {{ $t('hiddenCorner') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/hiddenCorner_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/hiddenCorner.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('hiddenCorner') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 40 x 30 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 20121
      </p>
    </div>
    <!-- END OF 3. slika -->
    <br />
    <br />
    <!-- 4. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('soirea') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/soirea_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/soirea.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('soirea') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 45 x 40 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2020
      </p>
    </div>
    <!-- END OF 4. slika -->
    <br />
    <br />
    <!-- 5. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('vagabundDiary') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/VagabondDiary_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/VagabondDiary.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('vagabundDiary') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 60 x 45 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 5. slika -->
    <br />
    <br />
    <!-- 6. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
        {{ $t('firstViolin') }}    
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/firstViolin_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/firstViolin.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('firstViolin') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 22 x 24 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 6. slika -->
    <!-- 1. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('eveTemptation') }} 
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/EveTemptation_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/EveTemptation.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('eveTemptation') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 30 x 20 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 1. slika -->
    <br />
    <br />
    <!-- 2. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('doubleC') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/DoubleC_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/DoubleC.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('doubleC') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 20 x 30 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 2. slika -->
    <br />
    <br />
    <!-- 3. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
    {{ $t('juicyComposition') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/JuicyComposition_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/JuicyComposition.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('juicyComposition') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 50 x 70 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 3. slika -->
    <br />
    <br />
    <!-- 4. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('goldenDreams') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/GoldenDreams_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/GoldenDreams.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('goldenDreams') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 50 x 70 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2008
      </p>
    </div>
    <!-- END OF 4. slika -->
    <br />
    <br />
    <!-- 5. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('firstLeague') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/FirstLeague_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/FirstLeague.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('firstLeague') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 30 x 40 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 5. slika -->
    <br />
    <br />
    <!-- 6. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
        {{ $t('dolceVita') }}    
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/DolceVita_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/DolceVita.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('dolceVita') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 30 x 40 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 6. slika -->
    <!-- 4. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('inVinoVeritas') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/InVinoVeritas_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/InVinoVeritas.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('inVinoVeritas') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 39 x 34 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 4. slika -->
    <br />
    <br />
    <!-- 5. slika -->
    <p class="picture-name2" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('wineMother') }}
    </p>
    <div class="skica-container">
      <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="~assets/img/hedonizem/WineMother_skica.jpg"
          alt="slide"
          class="responsive zoom"
        />
      </div>
    </div>
    <hr />
    <div data-aos="fade-up" data-aos-duration="3000">
      <img
        src="~assets/img/hedonizem/WineMother.jpg"
        alt="slide"
        class="responsive zoom slika2"
      />
      <p class="slika-info2">
        <strong>{{ $t('wineMother') }}</strong> <br />
        {{ $t('author') }} Max Zaxster <br />
        {{ $t('measurements') }} 20 x 30 cm <br />
        {{ $t('technique') }} {{ $t('pouring') }} <br />  
        {{ $t('year') }} 2007
      </p>
    </div>
    <!-- END OF 5. slika -->
  </div>
</template>

<script>

import HeroHedonija from '~/components/HeroHedonija.vue';

export default {
    components: {
     HeroHedonija
  }
};
</script>

<style scoped>
@import "./../static/fonts/stylesheet.css";
.root {
  --gray: #757378;
}

.about-img {
  display: inline-block;
  max-width: 50%;
  text-align: left;
  padding: 2em;
  margin: 5px;
  vertical-align: top;
}

.about-text {
  position: relative;
  z-index: 100;
  overflow: hidden;
  max-height: 400px;
  display: inline-block;
  color: rgba(255,255,255, 0.77);
  background: rgba(80, 79, 79, 0.8) !important;
  max-width: 50%;
  text-align: left;
  padding: 20px;
  margin: 80px 0px 0px -100px;
}

.about-text .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  cursor: pointer;
  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent,  rgb(29, 28, 28));
}
.predgovor {
  font-size: 1.4rem;
  padding: 20px;
  text-align: justify;
  letter-spacing: 2px;
  line-height: 2.0em;
}

.read-more {
  padding:40px;
  text-align:center;
}
.read-more a {
  line-height:1em;
  letter-spacing:0.06em;
  font-family: 'Lato', sans-serif;
  font-weight:normal;
  font-size:16px;
  text-decoration:none;
  color:#fff;
  background:#231f20;
  display:inline-block;
  padding:15px 12px 15px 15px;
  transition:background 200ms;
  border-radius:4px;
}
.read-more a:hover {
   background:#cea052;
}
.read-more a:after {
  font-family: 'FontAwesome', sans-serif;
  font-weight:300;
  content: "\f105";
  margin-left:20px;
  color:#cea052;
  font-size:18px;
  vertical-align:middle;
  transition:color 200ms;
}
.read-more a:hover:after {
  color:#231f20;
}

@media only screen and (max-width: 1500px) {
    .about-text {
        max-width: 50%;
        margin: 20px 0px 0px -100px !important;
    }
    .predgovor {
  font-size: 1.0rem;
  letter-spacing: 1px;
  line-height: 1.4em;
}
}
@media only screen and (max-width: 980px) {
    .about-img {
        max-width: 100%;
    }
    .about-text {
    margin: 0px 0px 0px 40px !important;
    max-width: 100%;

    }
  .predgovor {
    font-size: 1.9vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}
@media only screen and (max-width: 749px) {
  .about-img {
    max-width: 100%;
    padding: 0em;
    margin: 5px;
    vertical-align: top;
  }
  .about-text {
    margin: 0px !important;
    max-width: 100%;
  }

  .predgovor {
    font-size: 1.8vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}

.responsive {
  width: 100%;
  height: auto;
}

.picture-name2 {
  font-family: "AdonaisRegular";
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


@media only screen and (max-width: 1500px) {
    .about-text {
        max-width: 50%;
        margin: 20px 0px 0px -100px !important;
    }
    .predgovor {
  font-size: 1.0rem;
  letter-spacing: 1px;
  line-height: 1.4em;
}
}
@media only screen and (max-width: 980px) {

    .about-text {
    margin: 0px 0px 0px 40px !important;
    max-width: 100%;

    }
  .predgovor {
    font-size: 1.9vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}

@media only screen and (max-width: 749px) {
  .about-text {
    margin: 0px !important;
    max-width: 100%;
  }

  .predgovor {
    font-size: 1.8vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}

@media screen and (max-width: 600px) {
  .about-text {
    margin: -20px 0px 0px 0px !important;
    max-width: 100%;
    padding: 5px;
  }
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
