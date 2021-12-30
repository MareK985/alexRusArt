<template>
  <div class="portofolio">
    <ul>
      <a @click="$refs.alternativec.open()">
        <li id="seriography1" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/alternativec.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.stenaUmetnosti.open()">
        <li id="seriography2" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/stenaUmetnosti.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.tezkaPot.open()">
        <li id="seriography3" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/TezkaPot.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.vrocaLuna.open()">
        <li id="seriography4" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/vrocaLuna.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.zamisljenUmetnik.open()">
        <li id="seriography5" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/zamisljenUmetnik.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.zivljenskaUganka.open()">
        <li id="seriography6" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/zivljenskaUganka.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.socialnaOmrezja.open()">
        <li id="seriography7" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/socialnaOmrezja.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.natureVSTechnlogy.open()">
        <li id="seriography8" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/natureVSTechnlogy.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika9.open()">
        <li id="seriography9" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika9.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika10.open()">
        <li id="seriography10" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika10.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika13.open()">
        <li id="seriography11" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika13.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika14.open()">
        <li id="seriography12" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika14.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika15.open()">
        <li id="seriography13" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika15.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika16.open()">
        <li id="seriography14" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika16.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika17.open()">
        <li id="seriography15" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika17.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika18.open()">
        <li id="seriography16" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika18.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika19.open()">
        <li id="seriography16" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika19.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
      <a @click="$refs.slika20.open()">
        <li id="seriography16" data-aos="fade-up">
          <div>
            <img
              src="~assets/img/arts/slika20.jpg"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </a>
    </ul>
    <!-- MODALS -->
    <sweet-modal ref="alternativec" modal-theme="dark" overlay-theme="dark">
      <h2>ALTERNATIVEC</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/alternativec.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.alternativec.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="stenaUmetnosti" modal-theme="dark" overlay-theme="dark">
      <h2>STENA UMETNOSTI</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/stenaUmetnosti.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="read-more">
        <a class="button" @click="$refs.stenaUmetnosti.close()">{{ $t('back') }}</a>
      </p>
    </sweet-modal>
    <sweet-modal ref="tezkaPot" modal-theme="dark" overlay-theme="dark">
      <h2>TEŽKA POT</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/TezkaPot.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="read-more">
        <a class="button" @click="$refs.tezkaPot.close()">{{ $t('back') }}</a>
      </p>
    </sweet-modal>
    <sweet-modal ref="vrocaLuna" modal-theme="dark" overlay-theme="dark">
      <h2>VROČA LUNA V OCEANU</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/vrocaLuna.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="read-more">
        <a class="button" @click="$refs.vrocaLuna.close()">{{ $t('back') }}</a>
      </p>
    </sweet-modal>
    <sweet-modal ref="zamisljenUmetnik" modal-theme="dark" overlay-theme="dark">
      <h2>ZAMIŠLJENI UMETNIK</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/zamisljenUmetnik.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.zamisljenUmetnik.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="zivljenskaUganka" modal-theme="dark" overlay-theme="dark">
      <h2>ŽIVLJENJSKA UGANKA</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/zivljenskaUganka.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.zivljenskaUganka.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="socialnaOmrezja" modal-theme="dark" overlay-theme="dark">
      <h2>SOCIALNA OMREŽJA</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/socialnaOmrezja.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.socialnaOmrezja.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="natureVSTechnlogy" modal-theme="dark" overlay-theme="dark">
      <h2>NARAVA PROTI TEHNOLOGIJI</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/natureVSTechnlogy.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.natureVSTechnlogy.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika9" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #9</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika9.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika9.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika10" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #10</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika10.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika10.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika13" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #13</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika13.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika13.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika14" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #14</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika14.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika14.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika15" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #15</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika15.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika15.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika16" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #16</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika16.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika16.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika17" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #17</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika17.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika17.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika18" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #18</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika18.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika18.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika19" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #19</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika19.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika19.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika20" modal-theme="dark" overlay-theme="dark">
      <h2>SLIKA #20</h2>
      <p class="predgovor" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic quasi error quas. Consectetur, recusandae autem inventore temporibus quos tenetur iure deserunt, ullam dolorem numquam quis vel pariatur fuga nam.</p>
      <div>
        <img
          src="~assets/img/arts/slika20.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 60 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika20.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <!-- end of MODALS -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
@import "../static/fonts/stylesheet.css";

h2 {
 letter-spacing: 3px;
}

.modal {
  width: 30%;
}

.predgovor {
  text-align: justify !important;
}
.pictureInModal {
  width: 100%;
}
.portofolio ul {
    text-align: center;
}

.portofolio ul li {
    /* max-width: 850px; */
    width: auto;
    height: auto;
    color: white;
    display: inline-block;
    margin: 30px;
    overflow: hidden;
    text-align: center;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
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
  cursor: pointer;
}
.portofolio ul li:active div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}
#seriography1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/alternativec_neon.jpg);
}
#seriography2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/stenaUmetnosti_neon.jpg);
}
#seriography3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/TezkaPot_neon.jpg);
}
#seriography4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/vrocaLuna_neon.jpg);
}
#seriography5 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/zamisljenUmetnik.jpg);
}
#seriography6 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/zivljenskaUganka_neon.jpg);
}
#seriography7 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/socialnaOmrezja.jpg);
}
#seriography8 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/natureVSTechnlogy.jpg);
}
#seriography9 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika9.jpg);
}
#seriography10 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika10.jpg);
}
#seriography11 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika13.jpg);
}
#seriography12 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika14.jpg);
}
#seriography13 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika15.jpg);
}
#seriography14 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika16.jpg);
}
#seriography15 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika17.jpg);
}
#seriography16 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika18.jpg);
}
#seriography17 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika19.jpg);
}
#seriography18 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/arts/slika20.jpg);
}

.slika-info {
  color: white;
  font-size: 0.8em;
  text-align: right;
  line-height: 1.4em;
  margin-right: 10px;
  margin-top: 0.7em;
}

@keyframes neon {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}

@media only screen and (max-width: 749px) {
.portofolio ul li {
    width: auto;
    height: auto;
    margin: 15px;
}
}

@media only screen and (min-width: 501px) {
.read-more  {
  display: none;
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
.read-more  {
  margin-top: 40px !important;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid #fff;
  width: 150px;
  margin: auto;
  padding: 7px;
}
.read-more a {
  color: #fff !important;
}
.read-more a:active {
animation: neon 0.03s ease-in-out infinite;
}
}
</style>
