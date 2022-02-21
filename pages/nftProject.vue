<template>
  <div>
    <HeroNft class="pt" />
    <section class="main-section">
      <br>
      <div id="about">
        <h1 class="main-title" data-aos="zoom-in">
          ABOUT THE PROJECT
        </h1>
        <AboutNft />
      </div>
      <br>
      <div id="shop">
        <h2 class="gold">
          WORLD OF SUBCONSCIOUS / SVET PODZAVESTI
        </h2>
        <!-- <p class="title">
          Serigraphy Outremer is made of 5 different fts and one nft, they are all made of original Max Zaxter paintings. First to collect 5 minted tokens gets free NFT of this serigraphy.
        </p> -->
        <ShopNft />
      </div>
      <br>
    </section>
    <Footer />
  </div>
</template>

<script>
import HeroNft from '~/components/HeroNft.vue'
import AboutNft from '~/components/AboutNft.vue'
import ShopNft from '~/components/ShopNft.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		HeroNft,
		Footer,
		AboutNft,
		ShopNft
	}
}
</script>

<style lang="scss" scoped>

section {
  background:  rgb(29, 28, 28);
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
}

.main-section {
  transition: 0;
  padding-bottom: 300px; /* Height of the footer */
  // background:  rgb(29, 28, 28);
  // background-repeat: repeat-y;
}
.main-title {
  font-size: 4vw;
  font-weight: 600;
  padding-top: 0.5em;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  color:#fff
}
.gold {
  text-align: center;
  margin-bottom: 30px;
//   background: rgb(148, 87, 87);
  background-size: cover;
  color: #fff;
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
}
.title {
  color: #fff;
  font-weight: 600;
  padding-top: 0.5em;
  letter-spacing: 0em;
  margin-bottom: 30px;
  text-align: center;
}

.gifs {
  width: 100%;
}

.gifContainer {
  padding: 20px 100px;
}

@media screen and (min-width: 601px) {
  .gifContainer {
  padding: 20px 100px;
}
}

@media screen and (min-width: 1201px) {
  .gifContainer {
  max-width: 800px;
  margin: auto;
}
}

@media screen and (max-width: 600px) {
  .main-title {
    font-size: 8.5vw;
    letter-spacing: 0.1em;
  }
  .footer-text {
    line-height: 1.6em;
  }
  .title {
    padding: 0 20px;
    text-align: justify;
  }
  .main-section {
  background:  rgb(29, 28, 28);
  background-repeat: repeat-y;
}
.gifContainer {
  margin-bottom: 20px;
  padding: 0;
}
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}

// media queries for common device breakpoints

//Galaxy Fold //
@media only screen and (min-device-width : 270px) and (max-device-width : 280px) {

}
//
@media only screen and (min-device-width : 281px) and (max-device-width : 320px) {

}
//iPhone 5 //
@media only screen and (min-device-width : 321px) and (max-device-width : 359px) and (orientation : portrait)  {

}
//Galaxy S5/S8/Moto S4 //
@media only screen and (min-device-width : 360px) and (max-device-width : 374px) and (orientation : portrait)  {

}
//iPhone 6/7/8/X/11Pro/12 Mini //
@media only screen and (min-device-width : 375px) and (max-device-width : 389px) and (orientation : portrait)  {

}
//iPhone 12/12Pro //
@media only screen and (min-device-width : 390px) and (max-device-width : 413px) and (orientation : portrait)  {

}
//iPhone 6/7/8 Plus/11 //
@media only screen and (min-device-width : 414px) and (max-device-width : 440px) and (orientation : portrait)  {

}

</style>