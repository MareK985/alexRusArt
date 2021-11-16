/* eslint-disable no-tabs */
<template>
  <div class="container">
    <section>
      <p>
        <NuxtLink to="/NftProject">
          <button class="b06 gold">
            NFT PROJECT
          </button>
        </NuxtLink>
      </p>
    </section>
  </div><!-- /container -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$button-b: .125em;
$button-w: 9.5em;
$button-h: 2.8em;
$move-act: .125em;

button {
	position: relative;
	margin: .5em;
	border: solid .125em transparent;
	padding: 0;
	width: $button-w; height: $button-h;
	border-radius: .5*$button-h;
	color: #fff;
	text-shadow: 1px 1px var(--c-sh-txt, #{rgba(#000, .5)});
	font: 900 1.5em calligraffitti, cursive;
	filter: contrast(.65);
	transition: .2s ease-out;
	cursor: pointer;

	&:hover, &:focus {
		outline: none;
		filter: none
	}

	&:active { transform: translatey($move-act);
    }
}

.icon {
    top: -6px !important;
    left: 50px;
}

.gold {
    background: url("../assets/bg/gold_bg.jpg");
    background-size: cover;
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

button svg {
    position: absolute;
    top: -47px;
    left: 0;
    width: 100%;
}

.b06 {
  font-family: "TrojanProBold", Arial, sans-serif !important;
	border: 1px solid #9c9c9c;
}

.btn-1 {
    // border: 3px solid;
    // border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    background-image: url(~assets/logo/nftProject.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.btn-2 {
    // border: 3px solid;
    // border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    background-image: url(~assets/logo/max_podpis.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.btn-3 {
    // border: 3px solid;
    // border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    background-image: url(~assets/logo/mario_podpis.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.container {
	// padding-top: 20em;
	// position: relative;
}

.vertical-center {
    right: 0;
    left: 0;
    margin: 0;
    position: absolute;
    bottom: 10%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.container > section {
	margin: 0 auto;
	text-align: center;
	color: #fff;
}

.container > section p {
	position: relative;
	margin: 0;
	z-index: 1;
}

@media only screen
and (min-device-width : 500px)
and (max-device-width : 920px)
and (orientation : landscape) {
.vertical-center {
  top: 25%;
}
}

@media only screen and (max-width: 600px) and (orientation : portrait) {

.container {
    padding-top: 5em;
}
.vertical-center {
    top: 30%;
}
button {
  margin: 0.45em;
}
}

</style>
