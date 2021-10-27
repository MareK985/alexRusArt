<template>
  <div class="hero">
    <div class="item">
      <img class="centerLogo" src="./../assets/img/mz_logo_NOV.png"></img>
      <h3 class="gold">
        {{ $t('atelje') }}<br>Max Zaxster
      </h3>
      <h1>{{ $t('presents') }}</h1>
    </div>
    <!-- <img class="centerLogo" src="./../assets/img/maxZaxster-hero.jpg"></img> -->
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      class="languageToggle"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
    <Buttons />
    <ButtonNft />
    <div class="media-icons">
      <a href="https://www.facebook.com/maxzaxster"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
      <a href="https://www.instagram.com/ateljemaxzaxster/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a href="mailto:info@maxzaxster.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      <a @click="$refs.aboutModal.open()"><font-awesome-icon :icon="['fas', 'info-circle']" /></a>
    </div>

    <sweet-modal ref="aboutModal">
      <p class="aboutText">
        <br>
        {{ $t('predgovor1') }} <br>
        {{ $t('predgovor2') }} <br>
      </p>
      <p class="read-more">
        <a class="button" @click="$refs.aboutModal.close()">{{ $t('back') }}</a>
      </p>
    </sweet-modal>
  </div>
</template>

<script>

import Buttons from '~/components/Buttons.vue'
import ButtonNft from '~/components/ButtonNft.vue'

export default {
	components: {
		Buttons,
		ButtonNft
	},
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "./../static/fonts/stylesheet.css";

*{
  // margin:
  font-family: "TrojanProBold", Arial, sans-serif !important;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}
.item {
  padding-top: 3em;
}
.centerLogo {
  max-width: 180px;
  width:100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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

.aboutText {
  color: black;
  text-align: justify;

}

.gold {
    background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.languageToggle {
    color: white;
    text-decoration: none;
    right: 60px;
    padding: 15px;
    top: 10px;
    position: absolute;
}

h1 {
  text-align: center;
  letter-spacing: 50px;
  font-size: 2.2rem;
  font-weight: normal;
  line-height: 3.5rem;
}

h3 {
  text-align: center;
  font-size: 1.35rem;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 10px; // Smaller headers look better with spacing
  margin-bottom: 2em;
}

.hero {
  height: 100vh;
  background: url("../assets/bg/usnje_bg1.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

.media-icons{
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
   left: 50%;
  transform: translateX(-50%);
}

.media-icons a{
  position: relative;
  color: #fff;

  font-size: 25px;
  transition: 0.3s;
  transition-property: transform;
}

.media-icons a:not(:last-child){
  margin-right: 60px;
  color: #fff;

}

.media-icons a:hover{
  transform: scale(1.5);
  color: rgba(0, 0, 0, 0.7);
}

@media only screen
and (min-device-width : 500px)
and (max-device-width : 920px)
and (orientation : landscape) {
  .item {
      padding: 10px 10px 0px 10px;
  }
  .centerLogo {
  max-width: 60px;
  }
h1 {
  letter-spacing: 20px;
  font-size: 1.4rem;
  line-height: 0.5rem;
}

h3 {
  font-size: 0.7rem;
  line-height: 1.1rem;
  letter-spacing: 7px;
  margin-bottom: 2em;
}
.media-icons {
  margin-bottom: 0px;
}
}

@media (max-width: 560px) and (orientation : portrait){

    .languageToggle {
    top: 20px;
    right: 20px;
    padding: 10px;
    position: absolute;
    }

.item {
  // padding-top: 1.6em;
}

  .centerLogo {
  max-width: 80px;
  }

  .hero {
  background: url("../assets/bg/usnje_bg1-mobile.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}
h1 {
  letter-spacing: 10px;
  font-size: 1.5rem;
  line-height: 3.5rem;
}

h3 {
  font-size: 0.6rem;
  line-height: 1.2rem;
  letter-spacing: 7px;
  margin-bottom: 2em;
}
.media-icons {
  margin-bottom: 10px;
}
}

</style>
