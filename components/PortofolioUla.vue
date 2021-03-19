<template>
    <div class="portofolio">
      <ul>
        <li id="seriography1" data-aos="fade-right">
          <div>
              <!-- <img
                  src="~assets/logo/mario_podpis.png"
                  alt="slide"
                  class="collagio-name"/> -->
          </div>
        </li>
            <p class="slika-info2">{{ $t('deadRiver') }}</p>
            <p class="slika-info">
              {{ $t('author') }} Ula G. Lipowitz <br />
              {{ $t('measurements') }} 70 x 50 cm <br />
              {{ $t('technique') }} {{ $t('pouring') }} <br />  
              {{ $t('year') }} 2020
            </p>
        <li id="seriography2" data-aos="fade-right">
          <div>
            <!-- <NuxtLink to="/Outremer"><img
                src="~assets/logo/outremer.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink> -->
          </div>
        </li>
            <p class="slika-info2">{{ $t('paralelWorlds') }}</p>
            <p class="slika-info">
              {{ $t('author') }} Ula G. Lipowitz <br />
              {{ $t('measurements') }} 70 x 50 cm <br />
              {{ $t('technique') }} {{ $t('pouring') }} <br />  
              {{ $t('year') }} 2020
            </p>
        <li id="seriography3" data-aos="fade-right">
          <div>
            <!-- <NuxtLink to="/Verigarji"><img
                src="~assets/logo/verigarji.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink> -->
          </div>
        </li>
            <p class="slika-info2">{{ $t('heatFromHell') }}</p>
            <p class="slika-info">
              {{ $t('author') }} Ula G. Lipowitz <br />
              {{ $t('measurements') }} 60 x 40 cm <br />
              {{ $t('technique') }} {{ $t('pouring') }} <br />  
              {{ $t('year') }} 2020
            </p>
        <li id="seriography4" data-aos="fade-right">
          <div>
            <!-- <NuxtLink to="/Hedonija"><img
                src="~assets/logo/hedonija.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink> -->
          </div>
        </li>
            <p class="slika-info2">{{ $t('winterWind') }}</p>
            <p class="slika-info">
              {{ $t('author') }} Ula G. Lipowitz <br />
              {{ $t('measurements') }} 102 x 70 cm <br />
              {{ $t('technique') }} {{ $t('pouring') }} <br />  
              {{ $t('year') }} 2020
            </p>
        <!-- <li id="seriography5" data-aos="fade-right">
          <div>
            <NuxtLink to="/Ljubljena"><img
                src="~assets/logo/ljubljana.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink>
          </div>
        </li>
        <li id="seriography6" data-aos="fade-right">
          <div>
            <NuxtLink to="/NoConcept"><img
                src="~assets/logo/noConcept.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink>
          </div>
        </li>
        <li id="seriography7" data-aos="fade-right">
          <div>
            <NuxtLink to="/Paysage"><img
                src="~assets/logo/paysage.jpg"
                alt="slide"
                class="collagio-name"npmnn
            /></NuxtLink>
          </div>
        </li> -->

      </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
@import "../static/fonts/stylesheet.css";

.portofolio ul {
    text-align: center;
}

.portofolio ul li {
    max-width: 850px;
    width: 100%;
    height: 500px;
    color: white;
    display: inline-block;
    margin: 30px;
    overflow: hidden;
    text-align: center;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.slika-info {
  color: white;
  font-size: 0.7em;
  text-align: center;
  line-height: 1.1em;
  /* margin-right: 10%; */
  /* margin-top: 0.7em; */
}
.slika-info2 {
  color: white;
  font-size: 1em;
}


.collagio-name {
  width: 100%;
}

.portofolio ul li div {
  opacity: 0;
  transform: scale(10);
  transition: all 0.3s ease-in-out 0.2s;
}
.portofolio ul li:hover div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}
.portofolio ul li:active div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}
#seriography1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),
    url(~assets/img/ula/ula_artwork1.jpg);
}
#seriography2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),
    url(~assets/img/ula/ula_artwork2.jpg);
}
#seriography3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),
    url(~assets/img/ula/ula_artwork3.jpg);
}
#seriography4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),
    url(~assets/img/ula/ula_artwork4.jpg);
}
#seriography5 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/ljubljena/zmajevaAura.jpg);
}
#seriography6 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/noConcept/zivljenje1.jpg);
}
#seriography7 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/collagio/interpretacija.jpg);
}

@media only screen and (max-width: 749px) {
.portofolio ul li {
    max-width: 350px;
    /* height: 250px; */
    margin:10px 0px;
}
}

@media only screen and (max-width: 500px) {
.portofolio ul li div {
    opacity: 1;
    transform: none;
    transition: none;
}
.portofolio ul li div img {
    width: 100%; 
}
}
</style>