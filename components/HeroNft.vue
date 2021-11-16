<template>
  <div>
    <section>
      <input id="check" type="checkbox">
      <header :class="{ scrolling: scrollPosition > 50 }">
        <NuxtLink to="/">
          <font-awesome-icon class="back-btn" :icon="['fas', 'chevron-left']" />
        </NuxtLink>
        <!-- <img src="./../assets/img/mz_logo_NOV.png" alt="expar_logo"> -->
        <div class="gold">
          <h2>NFT project</h2>
        </div>
        <!-- <span class="left_area icon">
        <img src="./../assets/img/mz_logo_NOV.png" alt="expar_logo">
        <span class="logo-text">
        NFT project
        </span>
        </span> -->
        <div
          class="navigation"
          :class="{ active: isActive }"
        >
          <a href="#shop">NFT/FT catalogue</a>
          <a href="#partners">Partners</a>
          <a href="#about">about</a>
          <a href="mailto:info@maxzaxster.com">contact</a>
          <!-- <LangNavigation style="color: #ffffff" /> -->
        </div>
        <label for="check">
          <font-awesome-icon id="menu-btn" :icon="['fas', 'bars']" />
          <font-awesome-icon id="close-btn" :icon="['fas', 'times']" />
        </label>
      </header>
      <div class="content">
        <div class="info">
          <h2>
            VERIFICATION</span>
          </h2>
          <p>
            We take great pride to mint NFTs and FTs on Cardano blockchain. Here are all details you need to ensure our NFTs and FTs PS Max Zaxster. Check our policy ID to ensure NFTs and FTs which you are buying are minted by PS Max Zaxster. A Policy ID is used to verify the authenticity of all tokens. Always use your due diligence and cross-check Policy ID's before purchasing <strong>ANY</strong> artist's artwork to avoid becoming a victim of scams and counterfeit art.  Always verify the Policy ID'S for the artwork you intend to purchase.
          </p>
          <p style="text-align: left;">
            Policy id: <span class="policyId">9a91b4a1b14840291bb00e99f395475ec9877c2d7874c3d3bc4a248b</span>
          <!-- <a v-on:click="$refs.about.open()">{{ $t('readMore') }}</a> -->
          </p>
          <p>
            This policy is closed and no other nft or ft will be added.
          </p>
          <p>
            All already minted NFTs and FTs will not be minted again.
          </p>
          <a href="#shop" class="info-btn">NFT catalogue</a>
        </div>
      </div>
      <div class="media-icons">
        <a
          data-qa="fbButton"
          target="_blank"
          href="https://twitter.com/PZaxster "
        ><font-awesome-icon
          :icon="['fab', 'twitter']"
        /></a>
        <a
          data-qa="liButton"
          target="_blank"
          href="https://discord.com/invite/rTvMCRFc8q"
        ><font-awesome-icon
          :icon="['fab', 'discord']"
        /></a>
        <!-- <a data-qa="instaButton" href="#"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a data-qa="emailButton" href="#"
          ><font-awesome-icon :icon="['fas', 'envelope']"
        /></a> -->
      </div>
    </section>
  </div>
</template>

<script>
// import LangNavigation from '~/components/LangNavigation.vue'

export default {
	components: {
		// LangNavigation
	},
	data () {
		return {
			isActive: false,
			scrollPosition: 0
		}
	}
}
</script>

<style lang="css" scoped>
@import "./../static/fonts/stylesheet.css";

* {
  font-family: "TrojanProBold", Arial, sans-serif !important;
  margin: 0;
  padding: 0;
  color: #fff;
  box-sizing: border-box;
  /* font-family: 'Playfair Display', Helvetica, Arial; */
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url("../assets/bg/usnje_bg1.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

header {
  position: fixed;
  /* top: 0; */
  width: 100%;
  padding: 30px 10px 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background: rgba(19, 19, 19, 0.6) !important;
}

header .logo {
  position: relative;
  color: #000;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

header .navigation a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 15px;
  border-radius: 20px;
  transition: 0.3s;
  transition-property: background;
}

header .navigation a:not(:last-child) {
  margin-right: 10px;
}

header .navigation a:hover {
  background: url("../assets/bg/gold_bg.jpg");
  background-size: cover;
  color: #fff !important;
}

.left_area img {
width:15%;
  padding: 5px;

}

.left_area span {
  font-family: Helvetica, Arial;
  color: white;
  font-size: 2.5rem;
  letter-spacing: 2px;
  font-weight: 500;
  margin-left: 2px;
}

.icon {
  vertical-align: middle;
  display: inherit;
}
.logo-text {
  vertical-align: middle;
  display: inherit;
  margin: auto;
}

.gold {
    background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.scrolling {
  background-color: black;
  background-size: cover;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  padding: 15px 10px 15px 15px;
}

.content {
  max-width: 850px;
  margin: 200px 100px;
  background: url("../assets/bg/nft-verification.jpg") no-repeat;
  background-size: cover;
  }

.content .info {
  padding: 20px;
}

.content .info h2 {
  font-family: "Courgette", Helvetica, Arial !important;
  text-align: left;
  color: rgb(155, 144, 144);
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.content .info p {
  /* font-family: Helvetica, Arial !important; */
  font-family: "Courgette", Helvetica, Arial !important;
  color: #fff;
  font-size: 1.3em;
  text-align: justify;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.policyId {
  font-weight: 500;
  font-family: Courier, Arial !important;
  letter-spacing: 1px;
  word-wrap: break-word;
}
.navigation .trial-btn {
  color: #fff;
  background: blue;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.navigation .trial-btn:hover {
  background: #0c4f60;
}
.navigation .login-btn {
  color: white;
  border: 1px solid blue;
  background: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.navigation .login-btn:hover {
  background: blue;
  color: white !important;
}
header .navigation a:hover {
  color: black !important;
}
.info-btn {
  color:rgb(155, 144, 144) !important;
  border: 1px solid rgb(155, 144, 144);
  background: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.info-btn:hover {
  background: rgb(155, 144, 144);
  color: white !important;
}
.check {
  color: black !important;
}

.cta-btn {
  color: #fff;
  background: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
  margin: auto;
  width: 250px;
}

.cta-btn:hover {
  background: #0c4f60;
}

.media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 50px;
}

.media-icons a {
  position: relative;
  color: #111;
  font-size: 45px;
  transition: 0.3s;
  transition-property: transform;
}

.media-icons a:not(:last-child) {
  margin-right: 60px;
}

.media-icons a:hover {
  transform: scale(1.5);
  color: white;
}

label {
  display: none;
  color: white;
}

#check {
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

@media (max-width: 1650px) {
  header .navigation a {
    margin-right: 3px;
  }
}

@media (max-width: 1100px) {
  section {
  /* background: linear-gradient(193deg, rgba(12,46,68,1) 0%, rgba(61,88,105,1) 28%, rgba(96,93,108,1) 64%, rgba(251,115,119,1) 100%); */
    background: url("../assets/bg/usnje_bg1-mobile.jpg")no-repeat;
    background-size: cover;
    background-position: center;
  }
  .logo {
    left: 0;
  }
  header .navigation a {
    margin-right: 0px;
    padding: 2px 5px;
  }
  .navigation .trial-btn {
    letter-spacing: 0px;
    padding: 10px 2px;
  }
}

@media (max-width: 960px) {
  header {
    padding: 20px 10px;
  }

  header .navigation {
    display: none;
  }

  .navigation .trial-btn {
    letter-spacing: 1px;
    padding: 10px 20px;
  }

  label {
    display: block;
    font-size: 25px;
    cursor: pointer;
    transition: 0.05s;
    transition-property: color;
    margin-right: 10px;
    padding: 10px;
  }

  label:hover {
    color: #ffffff;
  }

  label #close-btn {
    display: none;
  }

  label #close-btn #menu_btn {
  }

  #check:checked ~ header .navigation {
    z-index: 2;
    position: fixed;
    background: rgba(19, 19, 19, 0.96) ;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #check:checked ~ header .navigation a {
    font-weight: 700;
    margin-right: 0;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  #check:checked ~ header label #menu-btn {
    display: none;
  }
  #check:checked ~ header label #close-btn {
    z-index: 2;
    display: block;
    position: fixed;
    right: 30px;
    top: 20px;
  }
  label .menu-btn {
    position: absolute;
  }
  header .logo {
    position: absolute;
    bottom: 30px;
  }
  .content .info h2 {
    font-size: 45px;
    line-height: 50px;
  }
  .content .info h2 span {
    font-size: 40px;
    font-weight: 600;
  }
  .content .info p {
    font-size: 18px;
    text-align: left;
  }
}

@media (max-width: 560px) {
  .content {
    margin: 150px 30px 40px 30px;
  }
  .content .info h2 {
    font-size: 1.9rem;
    line-height: 20px;
    letter-spacing: 4px;
  }
  .content .info h2 span {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .content .info p {
    font-size: 14px;
    text-align: justify;
  }
  .card-deck .card {
    min-width: 220px;
    padding: 10px;
  }
  .media-icons {
    margin-bottom: 20px;
  }

  .left_area {
    margin-left: 10px;
  }
  .left_area span {
  font-size: 1.3rem;
  letter-spacing: 1px;
}
  .scrolling {
    padding: 10px;
  }
}

@media only screen and (min-device-width: 950px) and (max-device-width: 1625px) {
    header .navigation a {
    margin-right: 7px;
    font-size: 0.7rem;
    letter-spacing: 0px;
  }
  .media-icons {
    margin-bottom: 50px;
  }
    .navigation .login-btn {
  padding: 5px;
}
  .navigation .trial-btn {
  padding: 5px;
}
.scrolling {
  padding: 5px 10px 5px 15px;
}
.left_area span {
  font-size: 1.5rem
}
}

@media only screen and (min-device-width: 950px) and (max-device-width: 1350px) {
.left_area {
  width: 200px;
}
header {
padding: 10px 10px 10px 50px;
}
}
/* END OF HEADER / HERO syles */

/* SMARTPHONES LANDSCAPE */
@media only screen and (min-device-width: 480px) and (max-device-width: 820px) and (orientation: landscape) {
  .media-icons {
    margin-bottom: 50px;
  }
  .scrolling {
    padding: 5px 0px 5px 25px;
  }
  #check:checked ~ header .navigation a {
    margin-bottom: 15px;
  }
  header {
    padding: 10px 10px;
  }
  .content {
    margin: 100px 50px;
  }
}

/*iPad */

/* OUR SERVICE syles */

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}
@media (min-width: 500px) {
  .mobileOnly {
    display: none;
  }
}

.container {
  max-width: 1300px;
}

.card-deck .card {
  min-width: 220px;
}

.border-top {
  border-top: 1px solid #e5e5e5;
}
.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}
</style>
