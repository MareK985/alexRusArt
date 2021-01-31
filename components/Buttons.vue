<template>
    <div class="container">
        <section class="vertical-center">
            <p>
                <NuxtLink to="/UlaLipowitz"><div class="btn btn-1 btn-1b"></div></NuxtLink>
                <NuxtLink to="/MaxZaxster"><div class="btn btn-2 btn-1b"></div></NuxtLink>
                <NuxtLink to="/MarioRosetti"><div class="btn btn-3 btn-1b"></div></NuxtLink>
            </p>
        </section>
    </div><!-- /container -->
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.btn {
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 40px 130px;
	display: inline-block;
    margin: 25px 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.btn:after {
	content: '';
	position: absolute;
	z-index: -1;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}
.btn-1 {
    border: 4px solid;
    border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    border-radius: 30px;
    background-image: url(~assets/logo/ula_podpis.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.btn-2 {
    border: 4px solid;
    border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    border-radius: 10px;
    background-image: url(~assets/logo/max_podpis.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.btn-3 {
    border: 4px solid;
    border-image-source: url(~assets/bg/gold_bg.jpg);
    border-image-slice: 1;
    border-radius: 10px;
    background-image: url(~assets/logo/mario_podpis.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}


.btn-1b:after {
	width: 100%;
	height: 0;
	top: 0;
	left: 0;
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
}

.container {
	height: 100%;
	position: relative;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.container > section {
	margin: 0 auto;
	padding: 5em 3em;
	text-align: center;
	color: #fff;
}

.container > section p {
	position: relative;
	margin: 0;
	z-index: 1;
}



@media only screen and (max-width: 600px) {
.btn {
    margin: 25px 10px;
    padding: 40px 120px;
}
.container > section {
	padding: 12em 3em;
}
}


</style>