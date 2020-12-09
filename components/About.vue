<template>
    <div>
      <div class="about-container">
        <div class="about-img" >
          <img class="responsive" src="~assets/img/ateljeMaxzaxster.jpg" />
        </div>
        <div class="about-text" data-aos="fade-left" data-aos-duration="1500"> 
          <p class="predgovor">{{ $t('predgovor') }}</p>
        </div>
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
  z-index: 100;
  display: inline-block;
  color: rgba(255,255,255, 0.77);
  background: rgb(80, 79, 79) !important;
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
    font-size: 1.6vh;
    text-align: justify;
    line-height: 1.5em;

  }
}

</style>