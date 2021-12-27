<template>
  <div class="portofolio">
    <ul>
      <NuxtLink to="/Collagio">
        <li id="seriography1" data-aos="fade-up">
          <div>
            <img
              src="~assets/logo/logo.png"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </NuxtLink>
      <NuxtLink to="/Outremer">
        <li id="seriography2" data-aos="fade-up">
          <div>
            <img
              src="~assets/logo/logo.png"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </NuxtLink>
      <NuxtLink to="/Hedonija">
        <li id="seriography4" data-aos="fade-up">
          <div>
            <img
              src="~assets/logo/logo.png"
              alt="slide"
              class="collagio-name"
              npmnn
            >
          </div>
        </li>
      </NuxtLink>
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
    height: 400px;
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
}
.portofolio ul li:active div {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out 0.1s;
}
#seriography1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography5 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography6 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}
#seriography7 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/slika.jpg);
}

@media only screen and (max-width: 749px) {
.portofolio ul li {
    max-width: 350px;
    height: 250px;
    margin: 0px;
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
