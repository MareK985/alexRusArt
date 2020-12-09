<template>
    <div class="portofolio">
      <ul>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
        <li id="case-study1" data-aos="fade-right">
          <div>
            <a href="projects/svetinaRanch" class="page-button"
              ><img
                src="~assets/img/collagio_gold.png"
                alt="slide"
                class="collagio-name"
            /></a>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

.portofolio ul li {
    max-width: 450px;
    height: 350px;
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
#case-study1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(~assets/img/collagio/interpretacija.jpg);
}

@media only screen and (max-width: 749px) {
.portofolio ul li {
    max-width: 320px;
    height: 320px;
    margin: 13px;
}
}
</style>