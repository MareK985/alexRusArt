<template>
  <div class="hero">
    <div class="item">
      <img class="centerLogo" src="./../assets/img/mz_logo_NOV.png"></img>
      <h3>{{ $t('atelje') }}<br/>Max Zaxster</h3>
      <h1>{{ $t('presents') }}</h1>
    </div>
    <!-- <img class="centerLogo" src="./../assets/img/maxZaxster-hero.jpg"></img> -->
    <nuxt-link
      class="languageToggle"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}
    </nuxt-link>
    <Buttons/>
    <div class="media-icons">
        <a href="https://www.facebook.com/maxzaxster"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="https://www.instagram.com/ateljemaxzaxster/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="mailto:info@maxzaxster.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
    </div>
  </div>
</template>

<script>

import Buttons from '~/components/Buttons.vue';


export default {
  components: {
    Buttons
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
  font-family: sans-serif;
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

.languageToggle {
    color: white;
    text-decoration: none;
    right: 60px;
    padding: 15px;
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
  padding-top: 1.6em;
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
}

</style>