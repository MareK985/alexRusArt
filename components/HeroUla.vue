<template>
  <div class="hero">
    <input id="check" class="check" type="checkbox">
    <header>
      <NuxtLink to="/">
        <font-awesome-icon class="back-btn" :icon="['fas', 'chevron-left']" />
      </NuxtLink>
      <div class="gold">
        <h2>Ula G. Lipowitz</h2>
      </div>
      <div class="navigation" :class="{ active: isActive }">
        <a href="#work" @click="isActive = !isActive">{{ $t('work') }}</a>
        <a href="#about">{{ $t('about') }}</a>
        <a href="#ambient">ambient</a>
        <a href="#testimonials">{{ $t('testimonials') }}</a>
        <a href="#footer">{{ $t('contact') }}</a>
        <!-- <router-link class="login-btn" :to="{}">Login</router-link> -->
      </div>
      <label for="check">
        <!-- <font-awesome-icon  id="menu-btn" :icon="['fas', 'bars']" />
          <font-awesome-icon  id="close-btn" :icon="['fas', 'times']" /> -->
      </label>
      <div class="languageToggle">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </header>
    <!-- <div class="svg-animation">
        <img src="../assets/static/images/undraw_shopping_app_flsj.svg">
       </div> -->
    <!-- <div class="content">
                <div class="info">
                    <h2>Experience shopping <br><span>in your unit</span></h2>
                    <p>Platform designed as a multi-unit on-demand m-commerce web application. </p>
                </div>
            </div> -->
    <!-- <div class="media-icons">
        <a href="https://www.facebook.com/maxzaxster"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="https://www.instagram.com/ateljemaxzaxster/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="mailto:info@maxzaxster.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollPosition: 0,
      isActive: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleTopBar)
  },
  methods: {
    handleTopBar () {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../static/fonts/stylesheet.css";

// :root {
//   --bg: rgb(44, 62, 80);
//   --bg-light: rgb(56, 80, 104);
//   --primary: #b97b42;
//   --bright: #ffffff;
//   --gray: #1b1e25;
// }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "TrojanProBold", Arial, sans-serif !important;
  color: #fff;
}
.active{
    display: none;
}
.back-btn {
    font-size: 55px;
    padding: 9px;
    color: white;
}

header h2 {
  font-size: 2em;
}

section{
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hero {
  height: 100vh;
  background: url("../assets/bg/ula_bg.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

.gold {
    background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.scrolling {
  background-image: url("../assets/bg/gold_bg.jpg");
  background-clip: text;
-webkit-background-clip: text;
  color: transparent;
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

header{
  position: relative;
  top: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  background: rgba(19, 19, 19, 0.4) !important;

}

header .logo{
  position: relative;
  /* color: var(--bright); */
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

header .navigation a{
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 3px;
    margin-left: 10px;
    padding: 10px 10px;
    border-radius: 1px;
    transition: 0.3s;
    transition-property: background;
}

header .navigation a:not(:last-child){
  margin-right: 30px;
}

header .navigation a:hover{
  // background: rgba(255, 255, 255, 0.2);
      background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.languageToggle {
    text-decoration: none;
    right: 40px;
    padding: 10px;
    position: absolute;
}

.languageToggle:hover {
    background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
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

label{
  display: none;
}

.check {
color: white;
}

#check{
  z-index: 3;
  display: none;

}

  .footerColumn {
    text-align: left;
  }
  footer h5 {
    padding-left: 24px;
  }
/* Responsive styles */

@media (max-width: 960px){
  .languageToggle {
    padding: 0px;
    position: absolute;
}
  header {
        padding: 10px 10px;
  }
  header .navigation {
    display: none;
  }

  label{
    display: block;
    padding: 10px;
    font-size: 25px;
    cursor: pointer;
    transition: 0.05s;
    transition-property: color;
    color: white;
  }

  // label:hover{
  // color: rgba(0, 0, 0, 0.7);
  // }

  label #close-btn{
    display: none;
  }

  label #close-btn #menu_btn{
  }

  #check:checked ~ header .navigation{
    z-index: 2;
    position: fixed;
    background: rgba(27, 30, 37, 0.8);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #check:checked ~ header .navigation a{
    font-weight: 700;
    margin-right: 0;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  #check:checked ~ header label #menu-btn{
    display: none;
  }
  #check:checked ~ header label #close-btn{
    z-index: 2;
    display: block;
    position: fixed;
  }
  label .menu-btn{
    position: absolute;
  }
  header .logo{
    position: absolute;
    font-size: 17px;
    left: 60px;
  }
}

@media (max-width: 560px){
  .hero {
  background: url("../assets/bg/ula_bg_mobile.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

header h2 {
  font-size: 1.4em;
}
}
@media only screen
and (min-device-width : 500px)
and (max-device-width : 920px)
and (orientation : landscape) {
.signature {
  width: 200px;
}
}
/* END OF HEADER / HERO syles */

/* OUR SERVICE syles */

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 1300px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

</style>
