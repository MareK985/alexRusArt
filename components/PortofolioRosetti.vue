<template>
  <div class="portofolio">
    <ul>
      <a @click="$refs.rossiModal.open()">
        <li id="seriography1" data-aos="fade-right">
          <li />
        </li>
      </a>
      <p class="slika-info2">
        {{ $t('bencinExtasy') }}
      </p>
      <p class="slika-info">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 130 x 90 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>

      <a @click="$refs.motokrosModal.open()">
        <li id="seriography2" data-aos="fade-right">
          <div />
        </li>
      </a>
      <p class="slika-info2">
        {{ $t('fleryMud') }}
      </p>
      <p class="slika-info">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 130 x 90 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>

      <a @click="$refs.zabaModal.open()">
        <li id="seriography3" data-aos="fade-right">
          <div />
        </li>
      </a>
      <p class="slika-info2">
        {{ $t('zaba') }}
      </p>
      <p class="slika-info">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 130 x 90 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
    </ul>

    <sweet-modal ref="rossiModal">
      <div>
        <img class="responsive" src="./../assets/img/rosetti/rossi_motor.jpg"></img>
      </div>
      <p class="slika-info4">
        {{ $t('bencinExtasy') }}
      </p>
      <p class="slika-info3">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 130 x 90 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
    </sweet-modal>
    <sweet-modal ref="motokrosModal">
      <div>
        <img class="responsive" src="./../assets/img/rosetti/motokros.jpg"></img>
      </div>
      <p class="slika-info4">
        {{ $t('fleryMud') }}
      </p>
      <p class="slika-info3">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 130 x 90 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
    </sweet-modal>
    <sweet-modal ref="zabaModal">
      <div>
        <img class="responsive" src="./../assets/img/rosetti/zaba.jpg"></img>
      </div>
      <p class="slika-info4">
        {{ $t('zaba') }}
      </p>
      <p class="slika-info3">
        {{ $t('author') }} Mario Rosetti <br>
        {{ $t('measurements') }} 50 x 70 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
    </sweet-modal>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
@import "../static/fonts/stylesheet.css";

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

.slika-info3 {
  color: black;
  font-size: 0.7em;
  text-align: center;
  line-height: 1.1em;
  /* margin-right: 10%; */
  /* margin-top: 0.7em; */
}
.slika-info4 {
  color: black;
  font-size: 1em;
}

.portofolio ul {
    text-align: center;
}
.responsive {
  width: 100%;
  margin: auto;
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
    url(~assets/img/rosetti/rossi_motor.jpg);
}
#seriography2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)),
    url(~assets/img/rosetti/motokros.jpg);
}
#seriography3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/rosetti/zaba.jpg);
}
#seriography4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/hedonizem/tihozitje_mafija.jpg);
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
    height: 350px;
    margin: 10px 0px;
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
