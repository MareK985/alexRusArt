<template>
  <div>
    <HeroCollagio/>
    <div class="about-container">        
      <a v-on:click="$refs.collagioShema.open()">
        <div 
        class="about-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in">
          <img class="responsive" src="~assets/img/collagio/collagio_about.jpg" />
        </div>
      </a>
      <div class="about-text" data-aos="fade-left" data-aos-duration="1500"> 
        <p class="predgovor">
          {{ $t('collagio1') }}
          {{ $t('collagio2') }}
          {{ $t('collagio3') }}
          {{ $t('collagio4') }}
        </p>
        <p class="author">{{ $t('collagioAuthor') }}</p>
        <p class="read-more">
          <a v-on:click="$refs.collagioAbout.open()">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <!-- 1. slika -->
    <p class="picture-name" data-aos="zoom-out-right" data-aos-duration="1500">
      {{ $t('asociacijaTitle') }}
    </p>
    <div class="skica-container">
      <a v-on:click="$refs.asociacijaSkica.open()">
        <div
        class="skica-img"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">
          <img
            src="~assets/img/collagio/asociacija_skice.jpg"
            alt="slide"
            class="responsive zoom"
          />
        </div>
      </a>
      <div class="skica-text" data-aos="fade-left" data-aos-offset="100">
        <p class="attractionsDescription">
        {{ $t('asociacija1') }} <br/>
        {{ $t('asociacija2') }} <br/>
        {{ $t('asociacija3') }} 
        </p>
        <p class="read-more">
          <a class="button" v-on:click="$refs.asociacija.open()">{{ $t('readMore') }}</a>
        </p>
      </div>
    </div>
    <hr />
    <a class="button" v-on:click="$refs.asociacijaSlika.open()">
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
    </a>    <!-- END OF 1. slika -->
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
          <a class="button" v-on:click="$refs.solucija.open()">{{ $t('readMore') }}</a>
        </p>
        <!-- <sweet-modal ref="solucija" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
          {{ $t('solucija1') }}
          {{ $t('solucija2') }}
          {{ $t('solucija3') }} 
          </p>
        </sweet-modal> -->
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
          <a class="button" v-on:click="$refs.evolucija.open()">{{ $t('readMore') }}</a>
        </p>
        <!-- <sweet-modal ref="evolucija" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
            {{ $t('evolucija1') }}
            {{ $t('evolucija2') }}
            {{ $t('evolucija3') }} 
          </p>
        </sweet-modal> -->
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
          <a class="button" v-on:click="$refs.interpretacija.open()">{{ $t('readMore') }}</a>
        </p>
        <!-- <sweet-modal ref="interpretacija" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
            {{ $t('interpretacija1') }} 
            {{ $t('interpretacija2') }} 
            {{ $t('interpretacija3') }} 
          </p>
        </sweet-modal> -->
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
          <a class="button" v-on:click="$refs.parodija.open()">{{ $t('readMore') }}</a>
        </p>
        <!-- <sweet-modal ref="parodija" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
            {{ $t('parodija1') }}
            {{ $t('parodija2') }} 
            {{ $t('parodija3') }} 
          </p>
        </sweet-modal> -->
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
          <a class="button" v-on:click="$refs.poklon.open()">{{ $t('readMore') }}</a>
        </p>
        <!-- <sweet-modal ref="poklon" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
            {{ $t('poklon1') }} <br/>
            {{ $t('poklon2') }} <br/>
            {{ $t('poklon3') }} 
          </p>
        </sweet-modal> -->
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
    <!-- start of MODALS -->
    <sweet-modal ref="collagioAbout" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
            {{ $t('collagio1') }} 
            {{ $t('collagio2') }}
            {{ $t('collagio3') }}
            {{ $t('collagio4') }}
      </p>
    </sweet-modal>
    <sweet-modal ref="asociacija" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
          {{ $t('asociacija1') }}
          {{ $t('asociacija2') }} 
          {{ $t('asociacija3') }} 
      </p>
    </sweet-modal>
    <sweet-modal ref="solucija" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
          {{ $t('solucija1') }}
          {{ $t('solucija2') }}
          {{ $t('solucija3') }} 
      </p>
    </sweet-modal>
    <sweet-modal ref="evolucija" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
            {{ $t('evolucija1') }}
            {{ $t('evolucija2') }}
            {{ $t('evolucija3') }} 
      </p>
    </sweet-modal>
    <sweet-modal ref="interpretacija" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
            {{ $t('interpretacija1') }} 
            {{ $t('interpretacija2') }} 
            {{ $t('interpretacija3') }} 
       </p>
    </sweet-modal>
    <sweet-modal ref="parodija" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
            {{ $t('parodija1') }}
            {{ $t('parodija2') }} 
            {{ $t('parodija3') }} 
      </p>
    </sweet-modal>
    <sweet-modal ref="poklon" modal-theme="dark" overlay-theme="dark">
      <p class="predgovorModal">
            {{ $t('poklon1') }} <br/>
            {{ $t('poklon2') }} <br/>
            {{ $t('poklon3') }} 
      </p>
    </sweet-modal>
    <sweet-modal ref="collagioShema">
      <img class="responsive" src="~assets/img/collagio/collagio_about.jpg"/>    
    </sweet-modal>
    <sweet-modal ref="asociacijaSkica">
      <img src="~assets/img/collagio/asociacija_skice.jpg" alt="slide" class="responsive zoom"/>
    </sweet-modal>">
    <sweet-modal ref="asociacijaSlika">
      <img src="~assets/img/collagio/asociacija.jpg" alt="slide" class="responsive zoom slika"/>
      <p class="slika-info"><strong>{{ $t('asociacijaTitle') }}</strong> <br />
          {{ $t('author') }} Max Zaxster <br />
          {{ $t('measurements') }} 200 x 70 cm <br />
          {{ $t('technique') }} {{ $t('oilAkril') }} <br />  
          {{ $t('year') }} 2020
      </p>
    </sweet-modal>">

   <!-- end of MODALS -->

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
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);

.root {
  --gray: #757378;
}

.about-container {
  padding: 15px;
  z-index: 10;

}

.attractionsDescription {
  font-size: 1.05rem;
  line-height: 160%;
}

.responsive {
  width: 100%;
  height: auto;
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
  display: inline-block;
  position: relative;
  overflow: hidden;
  max-height: 550px;
  z-index: 10;
  color: rgba(255,255,255, 0.77);
  background: rgb(80, 79, 79) !important;
  max-width: 50%;
  text-align: left;
  padding: 20px;
  z-index: 4 !important;
  margin: 80px 0px 0px -100px;
}
.skica-text {
  max-height: 550px !important;
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
  background-image: linear-gradient(to bottom, transparent, white);
}
.predgovor {
  font-size: 1.2rem;
  padding: 10px;
  text-align: justify;
  letter-spacing: 2px;
  line-height: 1.8em;
}
    .predgovorModal {
  font-size: 1.2rem;
  padding: 10px;
  text-align: justify;
  letter-spacing: 2px;
  line-height: 1.8em;
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
    .predgovorModal {
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
    .predgovorModal {
    font-size: 1.9vh;
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
    .predgovorModal {
    font-size: 1.8vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
  .slika-info {
    font-size: 0.8em !important;
  }
}

@media only screen and (max-width: 500px) {
  .about-text {
    margin: -20px 0px 0px 0px !important;
    max-width: 100%;
    padding: 5px;
    max-height: 250px;
  }
  .about-img {
    max-width: 100%;
  }
  .predgovor {
    font-size: 1.6vh;
    text-align: justify;
    line-height: 1.5em;
  }
  .predgovorModal {
    font-size: 1.6vh;
    line-height: 1.5em;
    padding: 2px;
  }
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
  text-align: center;
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
  max-height: 350px;
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
  cursor: pointer;
  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, white);
}
.slika {
  margin-top: 6em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  box-shadow: 10px 10px 5px var(--gray);
}
.slika-info {
  font-size: 1.4em;
  text-align: right;
  margin-right: 10%;
  margin-top: 0.7em;
}
/* Style the tab */
li {
  font-size: 1.6em;
}
.attractionsDescription {
  color: var(--gray) !important;
  padding: 8px;
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
    font-size: 0.6em;
    line-height: 1.2em;
    margin-right: 5%;
  }
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

</style>
