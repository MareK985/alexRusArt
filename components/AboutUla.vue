<template>
    <div>
      <div class="about-container">
        <div class="about-img" >
          <img class="responsive" src="~assets/img/ula/ula-about.jpg" />
        </div>
        <div class="about-text"> 
          <p class="predgovor">{{ $t('aboutUla') }}</p>
          <p class="read-more">
            <a v-on:click="$refs.about.open()">{{ $t('readMore') }}</a>
        </p>
        </div>
        <sweet-modal ref="about" modal-theme="dark" overlay-theme="dark">
          <p class="predgovorModal">
                {{ $t('aboutUla') }} 
          </p>
          <p class="read-more">
            <a class="button" v-on:click="$refs.about.close()">{{ $t('back') }}</a>
          </p>
        </sweet-modal>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

.about-container {
  padding: 15px;
}
.responsive {
  width: 100%;
  height: auto;
}
.about-img {
  display: inline-block;
  max-width: 50%;
  text-align: left;
  padding: 2em;
  margin: 5px;
  vertical-align: top;
}
.about-text {
  position: relative;
  overflow: hidden;
  max-height: 400px;
  z-index: 2;
  display: inline-block;
  color: rgba(255,255,255, 0.77);
  background: rgb(19, 19, 19) !important;
  max-width: 50%;
  text-align: left;
  padding: 20px;
  margin: 80px 0px 0px -100px;
}
.predgovor {
  font-size: 1.2rem;
  padding: 10px;
  text-align: justify;
  letter-spacing: 2px;
  line-height: 1.8em;
}
.about-text .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  cursor: pointer;
  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent,  rgb(29, 28, 28));
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

@media only screen and (max-width: 1500px) {
    .about-text {
        max-width: 50%;
        margin: 20px 0px 0px -100px !important;
    }
    .predgovor {
  font-size: 1.0rem;
  letter-spacing: 1px;
  line-height: 1.4em;
}
}
@media only screen and (max-width: 980px) {
    .about-img {
        max-width: 100%;
    }
    .about-text {
    margin: 0px 0px 0px 40px !important;
    max-width: 100%;

    }
  .predgovor {
    font-size: 1.9vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}
@media only screen and (max-width: 749px) {
  .about-img {
    max-width: 100%;
    padding: 0em;
    margin: 5px;
    vertical-align: top;
  }
  .about-text {
    margin: 0px !important;
    max-width: 100%;
  }

  .predgovor {
    font-size: 1.8vh;
    text-align: justify;
    padding: 10px 20px;
    line-height: 1.3em;
  }
}

@media only screen and (max-width: 500px) {
  .about-text {
    margin: -20px 0px 0px 0px !important;
    max-width: 100%;
    padding: 5px;
  }
  .about-img {
    max-width: 100%;
  }
  .predgovor {
    font-size: 2vh;
    text-align: justify;
    line-height: 1.35em;

  }
}

</style>