<template>
  <div class="hero">
    <input id="check" class="check" type="checkbox">
    <header :class="{scrolling: scrollPosition > 500}">
      <div class="navigation">
        <a href="#seriographies">{{ $t('seriographies') }}</a>
        <a href="#about">{{ $t('about') }}</a>
        <a href="#ambient" @click="isActive = !isActive">ambient</a>
        <a href="#testimonials">{{ $t('testimonials') }}</a>
        <a href="#footer">{{ $t('contact') }}</a>
      </div>
      <label for="check">
        <!-- <font-awesome-icon  id="menu-btn" :icon="['fas', 'bars']" />
          <font-awesome-icon  id="close-btn" :icon="['fas', 'times']" /> -->
      </label>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        class="languageToggle"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </header>
    <MainLogo />
    <div class="media-icons">
      <a href="https://www.facebook.com/alexander.bakharev.1"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
      <a href="https://www.instagram.com/alex_rus_art_official/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a href="mailto:info@alexrusart.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
    </div>
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'

export default {
	components: {
		MainLogo
	},
	data () {
		return {
			scrollPosition: 0
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
}

.gold {
    background: url("../assets/bg/bg.jpg");
    background-size: cover;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.pricing-header h3 {
  font-size: 4em;
  margin-bottom: 0.5em;
}
.back-btn {
    font-size: 55px;
    padding: 9px;
    color: white;
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
  background: url("../assets/bg/bladeRunner.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

.scrolling {
  background-color: rgb(65,65,65);
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
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

header .navigation a{
    color: #fff;
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
    background: url("../assets/bg/bg.jpg");
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.languageToggle {
    color: white;
    text-decoration: none;
    right: 40px;
    padding: 0;
    position: absolute;
}

.languageToggle:hover {
    background: url("../assets/bg/bg.jpg");
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.content .info h2{
  text-align: left;
  color: var(--primary);
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.content .info h2 span{
  color: #fff;
  font-size: 50px;
  font-weight: 600;
}

.content .info p{
  color: #fff;
  font-size: 30px;
  text-align: justify;
  font-weight: 500;
  margin-bottom: 40px;
}
.navigation .login-btn
{
  color: #fff;
  background: var(--primary);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.navigation .login-btn:hover{
  background: #0C4F60;
}

.content .info-btn
{
  color: #fff;
  background: #0C4F60;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.content .info-btn:hover{
  background: #0C4F60;
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
    padding: 0;
    position: absolute;
}
  header {
        padding: 10px 10px;
  }

  header .navigation{
    display: none;
  }

  label{
    display: block;
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
    font-size: 20px;
    top: 10px;
    left: 60px;
  }
  .content .info h2{
    font-size: 45px;
    line-height: 50px;
  }
  .content .info h2 span{
    font-size: 40px;
    font-weight: 600;
  }
  .content .info p{
    font-size: 18px;
  }
}

@media (max-width: 560px){
  .hero {
  background: url("../assets/bg/bladeRunner.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}
header h2 {
  font-size: 1.4em;
}
}
@media only screen and (min-device-width : 500px) and (max-device-width : 920px) and (orientation : landscape) {
  .logo svg {
  margin-top: -65px;
  margin-left: 50px;
}
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
