<template>
  <div>
    <div class="about-container">
      <div class="about-img">
        <img class="responsive" src="~assets/img/ProfilePics/profilePic1.jpg">
      </div>
      <div class="about-text">
        <p class="predgovor">
          Prihajam iz Sibrije v času velike nestabilnosti. Naučil sem se vrednot življenja,
          borbe za izražanje svojega jaza in lastne energije. Podzavestno sem začel iskati poti do samoizražanja.
          <br>
          <br>
          Na mojo srečo sem dobil priložnost selitve v prečudovito, fantastično deželo Slovenijo.
          Ko sem stopil iz letala sem začutil sladko aromo slovenskega zraka. Teh občutkov ne bom pozabil nikoli.
          Ostali bojo meja mojega življenja. Prva leta sem dal skozi borbo samim sabo, uničevanju stereotipov in psiholoških travm ter rušenje zidov.
          Za to se lahko zahvalim tudi mojim bližnjim. Iz vseh teh izkušenj sem začel odpirat svoj pravi jaz in definitivno samoizražat...
          <br>
          <br>
          V enem obdobju, v enem težkem obdobju sem imel izbiro ali se zapijem ali zadrogiram, kar bi me pripeljalo
          v začasno olajšanje. Ampak drugi dan se zbudiš z istimi težavami ali pa se večjimi.
          Sem izbral pot, kjer sem imel kup mešane energije v svoji duši. Da začnem samoizražat vsepovsod kjer lahko...
          od pisanja pesmi in slikarstva. To je bilo za mene veliko olajšanje in delitev energije iz podzavesti.
          Po pogovoru z eno gospodično, ki je izkušena na področju bio energije, sem nehal delit negativno energijo na platno,
          in sem začel ustvarjat maksimalno pozitivne slike.
          Zbral sem vso svojo pozitivno energijo, kar ni bilo lahko v tem obdobju, in začel ustvarjat.
          Ustvarjat slike, ki prikazujejo mojo lastno podzavest.
          Negativne slike sem uničil.
          <br>
          <br>
          Na mojih slikah boste videli maksimalno odprtost, širino, kritika svetovne omejenosti, ki vpliva na
          življenje in usodo ljudi. Delal bom za ljudi, ki so bili v isti situaciji, z istimi psihološkimi blokadami.
          Prvi korak je, da si to priznajo in premislijo celo svoje življenje. Iz mojih lastnih izkušenj in analiziranju
          slikarjev preteklosti malo kdo naredil prvi korak pri zavestni analizi samega sebe.
          <br>
          <br>
          Zgodovina se ponavlja. Vsak režim želi ljudstvo maksimalno zaprto in deluje po standardnih predpisih držav (kao moderno kulturo).
          Jaz želim maksimalno KULTURNO odprtost in osvoboditev, odblokado. Tako lahko živiš polno, svobodno življenje. Odpirat dušo in svet.
          Moje poslanstvo pri tem je, da bodo moja dela odpirala vrata v vašo dušo.
        </p>
        <p class="read-more">
          <a @click="$refs.about.open()">{{ $t('readMore') }}</a>
        </p>
      </div>
      <sweet-modal ref="about" modal-theme="dark" overlay-theme="dark">
        <p class="predgovor">
          Prihajam iz Sibrije v času velike nestabilnosti. Naučil sem se vrednot življenja,
          borbe za izražanje svojega jaza in lastne energije. Podzavestno sem začel iskati poti do samoizražanja.
          <br>
          <br>
          Na mojo srečo sem dobil priložnost selitve v prečudovito, fantastično deželo Slovenijo.
          Ko sem stopil iz letala sem začutil sladko aromo slovenskega zraka. Teh občutkov ne bom pozabil nikoli.
          Ostali bojo meja mojega življenja. Prva leta sem dal skozi borbo samim sabo, uničevanju stereotipov in psiholoških travm ter rušenje zidov.
          Za to se lahko zahvalim tudi mojim bližnjim. Iz vseh teh izkušenj sem začel odpirat svoj pravi jaz in definitivno samoizražat...
          <br>
          <br>
          V enem obdobju, v enem težkem obdobju sem imel izbiro ali se zapijem ali zadrogiram, kar bi me pripeljalo
          v začasno olajšanje. Ampak drugi dan se zbudiš z istimi težavami ali pa se večjimi.
          Sem izbral pot, kjer sem imel kup mešane energije v svoji duši. Da začnem samoizražat vsepovsod kjer lahko...
          od pisanja pesmi in slikarstva. To je bilo za mene veliko olajšanje in delitev energije iz podzavesti.
          Po pogovoru z eno gospodično, ki je izkušena na področju bio energije, sem nehal delit negativno energijo na platno,
          in sem začel ustvarjat maksimalno pozitivne slike.
          Zbral sem vso svojo pozitivno energijo, kar ni bilo lahko v tem obdobju, in začel ustvarjat.
          Ustvarjat slike, ki prikazujejo mojo lastno podzavest.
          Negativne slike sem uničil.
          <br>
          <br>
          Na mojih slikah boste videli maksimalno odprtost, širino, kritika svetovne omejenosti, ki vpliva na
          življenje in usodo ljudi. Delal bom za ljudi, ki so bili v isti situaciji, z istimi psihološkimi blokadami.
          Prvi korak je, da si to priznajo in premislijo celo svoje življenje. Iz mojih lastnih izkušenj in analiziranju
          slikarjev preteklosti malo kdo naredil prvi korak pri zavestni analizi samega sebe.
          <br>
          <br>
          Zgodovina se ponavlja. Vsak režim želi ljudstvo maksimalno zaprto in deluje po standardnih predpisih držav (kao moderno kulturo).
          Jaz želim maksimalno KULTURNO odprtost in osvoboditev, odblokado. Tako lahko živiš polno, svobodno življenje. Odpirat dušo in svet.
          Moje poslanstvo pri tem je, da bodo moja dela odpirala vrata v vašo dušo.
        </p>
        <p class="read-more">
          <a class="button" @click="$refs.about.close()">{{ $t('back') }}</a>
        </p>
      </sweet-modal> -->
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
  max-height: 650px;
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
/* .read-more a:after {
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
} */

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