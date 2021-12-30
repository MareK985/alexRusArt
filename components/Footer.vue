<template>
  <div id="footer" class="pt-4 pt-md-5 bg">
    <div class="media-icons">
      <a href="https://www.facebook.com/maxzaxster"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
      <a href="https://www.instagram.com/ateljemaxzaxster/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a href="mailto:info@maxzaxster.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      <a @click="$refs.aboutModal.open()"><font-awesome-icon :icon="['fas', 'info-circle']" /></a>
    </div>

    <sweet-modal ref="aboutModal">
      <p class="aboutText">
        <br>
        {{ $t('predgovor1') }} <br>
        {{ $t('predgovor2') }} <br>
      </p>
      <p class="read-more">
        <a class="button" @click="$refs.aboutModal.close()">{{ $t('back') }}</a>
      </p>
    </sweet-modal>

    <div id="contact" class="footer-text">
      <p>{{ $t('atelje') }} ALEX RUS</p>
      <p>{{ $t('copyright') }} &copy; {{ new Date().getFullYear() }} | 040 985 560 | info@alexrusart.com</p>
    </div>
    <MareUXLogo2 />
  </div>
</template>

<script>

import MareUXLogo2 from '~/components/MareUXLogo2.vue'

export default {
	components: {
		MareUXLogo2
	}

}
</script>

<style lang="css" scoped>

.bg {
    background:  rgb(17, 17, 17);
    color: white;
    padding-bottom: 0.5em;
}

.footer-text {
  align-items: center;
  text-align: center;
  color: white;
  font-size: 0.9em;
  bottom: 0px;
}

.aboutText {
  color: black;
  text-align: justify;

}

.media-icons{
  /* position: absolute;  */
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
   /* left: 50%; */
  /* transform: translateX(-50%); */
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
  color: white;
}

.read-more {
  padding:40px;
  text-align:center;
}
.read-more a {
    line-height:1em;
  letter-spacing:0.06em;
  font-family: 'Lato', sans-serif;
  font-weight:normal;
  font-size:16px;
  text-decoration:none;
  color:#fff;
  background:#231f20;
  display:inline-block;
  padding:15px 12px 15px 15px;
  transition:background 200ms;
  border-radius:4px;
}
.read-more a:hover {
   background:#cea052;
}
.read-more a:after {
  font-family: 'FontAwesome', sans-serif;
  font-weight:300;
  content: "\f105";
  margin-left:20px;
  color:#cea052;
  font-size:18px;
  vertical-align:middle;
  transition:color 200ms;
}
.read-more a:hover:after {
  color:#231f20;
}

@media only screen and (max-width: 749px) {
   .footer-text {
    line-height: 1.5em;
    font-size: 0.7em;
  }
}

@media only screen and (max-width: 500px) {
.bg {
padding-bottom: 4em;
}
}
</style>
