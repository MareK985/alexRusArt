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
        <li id="seriography17" data-aos="fade-up">
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
        <li id="seriography18" data-aos="fade-up">
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
      <p class="predgovor" />
      Nase mislenje, gledanje na ta svet v razlicnih casovnih intervalih je zelo zanimiva stvar. Ce bi clovek postavil pred sabo platno al bi samoizrazal
      na zidu,na katerem dal ven zavestne emocije in podzavestne custva, defenetivno bi se pocutil boljse ko prej. Problem skupnosti, da ljudi ne vejo
      kako se sprostit od viska energije, custv in emocij ... Berlinska stena v 80h ali alternativni art plac je tipicne primere za samoizrazanje.
      Daj vse iz sebe! Samoizrazaj!      </p>
      <div>
        <img
          src="~assets/img/arts/stenaUmetnosti.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2018-2020
      </p>
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
      <h2>NAIVNA PRIČAKOVANJA</h2>
      <p class="predgovor" />
      Odrasli ljude se dobro zavedajo kako ziveti v tem svetu, da obstaja pri posameznikih million razlicne energie, katera lahko vpliva zelo pozitivno al
      se spravi v jok...  Vecinoma ljudi pricakujejo pozitivno resitev v katerikoli situaciji... posten in dober rezultat... Ampak nas svet ne travnik
      z vrtnicami... Postenost in dobrota je redki custva, katere v vecinoma primerah, s pomocjo psiholoske maske, uporabljajo v svojih koristneh ciljah.
      Naivno 100% pricakovat od bliznega cloveka dobroto in postenost, treba biti pripravljen na vse zive reakcije, ampak upanje v dobrega postenega cloveka
      se vedno je!      </p>
      <div>
        <img
          src="~assets/img/arts/socialnaOmrezja.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2019-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.socialnaOmrezja.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="natureVSTechnlogy" modal-theme="dark" overlay-theme="dark">
      <h2>NARAVA PROTI TEHNOLOGIJI</h2>
      <p class="predgovor" />
      </p>Narava v zadnjem casu trpi, zaradi cloveskih zelj, pohlepa in egoizma. Clovek kot del narave trpi zaradi sebi podobnega. Ustvaril je tehnologijo, ki
      nekaj malega da ampak unici dosti vec. Cena je velika, poruseno ravnovesje. Potrebno je odpreti uci in se nauciti na napakah preteklosti (crnobil, 1986).
      Nikdar ni prepozno za ohranjanje tega kar je ostalo. Vsak posameznik lahko zacne pri sebi in naredi velik korak k prihodnosti in ponovni vzpostavitvi
      ravnovesja. Verjamem, da je v cloveku moc, da znova vzpostavi stik z naravo in svojo duso. Ostalo ni vredno energije.
      </p>
      <div>
        <img
          src="~assets/img/arts/natureVSTechnlogy.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 100 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2019-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.natureVSTechnlogy.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika9" modal-theme="dark" overlay-theme="dark">
      <h2>ZABAVA</h2>
      <p class="predgovor" />
      Zvedna noc, muzika na glas, tece po kazarcu alholne napitke, nekdo uziva v prepovedanih substancah in fantasticna energija na plesciscu! Kri vre v zilah
      in ne bi zelel konca tej noci... zurka dkler ne odpove telo, zurka dokler ne pride policija, zurka dokler je dusevna energija!
      Relax na max... dokler smo zive!
      </p>
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
        {{ $t('year') }} 2019-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika9.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika10" modal-theme="dark" overlay-theme="dark">
      <h2>PODZAVEST</h2>
      <p class="predgovor" />
      Podzavest je zelo velika uganka za vsakega cloveka. Malo kdo lahko se odpre svojo podzavest in dobi odgovore, katere zeli vedet. Vecinoma ljudi imajo zid
      pred sabo, katere zgradili sami al to povzrocila skupnost, in ta ljudi tezko se spoznajo sami sebe, tezko se sprostijo in se odprejo... Obstaja razlicne
      metode povezovanja s svojo pozdzavestjo in ena iz teh metod meditacija, s pomocjo katere clovek se poglubi v samega sebe. Mene osebno meditacija dosti
      pomagala se sprostit in spoznat svojo podzavest!
      </p>
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
        {{ $t('year') }} 2018-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika10.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika13" modal-theme="dark" overlay-theme="dark">
      <h2>PUBERTETA</h2>
      <p class="predgovor" />
      Cudovito obdobje ko si mlad polen harmonov, mesanih custv in cel svet je tvoj! Rad bi vse sprobal, obcutil in spoznal cem prej ta svet. Naivna mlada dusa, se vceri otrok, ko metulcik, katera
      leti na svetlobo... rezultat pa je zelo ne pricakovan. Vsak mali clovek ima million poti, katero bo izbral ali njega pripele usoda. Zabava, pricakovanja, energija
      ta obcutki in marsikatere drugi gorece se izrazajo iz obdobja pobertete.
      </p>
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
        {{ $t('year') }} 2019-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika13.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika14" modal-theme="dark" overlay-theme="dark">
      <h2>BARVITE POTI</h2>
      <p class="predgovor" />
      Opazovanje, odprte oci in se en krat opazovanje ljudi, kate re okrog nas in , ce si pameten, se ucenje na njihovih napakah...to so analiziranje cloveskega zicvlenskega poti in se
      ucenje na njegovih napakah, razen ce si pogumen, trd ko skala in malo neumen...lahko se ucis na svojih! :) Samo veliko vprasanje, ce se naucis, ali se
      nardis vec krat iste napake. Analiziranje zivljenja drugih nam veliko da informacije, ne glede na to da smo zelo drugacne, tudi 5% iskusen je neprecenlivo!
      </p>
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
        {{ $t('year') }} 2018-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika14.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika15" modal-theme="dark" overlay-theme="dark">
      <h2>MEJA</h2>
      <p class="predgovor" />
      Vsak od nas ima slabe iskusni, travme in cel kup negativnih custv... Problem v tem, da ne vsak, celo vecina ljudi , ne znajo dat, oziroma locit svoji custva in ne prenasat negativ na druge,
      ker to je tipicna lastnost sibkih ljudi, katere ne jkontrolirajo svoji custva in jejo energijo drugih z samo izrazitvo negativa. Vsak clovek je mocan...al fizicno al psihicno,
      zelo malo kdo to zaveda in kontrolira, vsako lastnost ali talent treba se razvijat in skrbet za to, da ne bi nastradali zaradi tega nedolzne ljudi okrog sebe! Tvoji probleme samo tvoji, okrog so ljudi,
      ni so krive!
      </p>
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
        {{ $t('year') }} 2018-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika15.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika16" modal-theme="dark" overlay-theme="dark">
      <h2>SEKS, SRCE IN DENAR</h2>
      <p class="predgovor" />
      Ko potrebujes sex, denaer in disevni mir istocasno ...zna zgoditi , da enostno emocionalno explodiras z posledice, za katere te dejansko vseeno...lastna narava preoblada...
      Ti mas velo nactov katere veliko stanejo za te, nimas denarja, sexualno si nezavoljen in te najbolj strada dusa, ki primanjkuje cel kup faktorjev za zadovoljstvo in dusevni mir.
      Zgodi histericna explozija ki v eni noci ustvarjas, ko si lacen, zejen , nimas cigaret in sizofrenicno izrasas svoje custva ppo vrh custv,kateri si ze izrazil 6 min nazaj! To je
      zivlenski faktor, do katerega malo kdo prisel, iskreno upam da ljude raj izrazijo na fizicnem materialu, kot drug na drugemu!
      </p>
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
        {{ $t('year') }} 2020-2021
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika16.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika17" modal-theme="dark" overlay-theme="dark">
      <h2>ILUZIJA SVOBODE</h2>
      <p class="predgovor" />
      Svoboda, enakopravije, primerne placi, samoizrazitev ... korupcija, politicna laz, izdaja, LAKOTA, radikalna anarhija, lazne idole, VOJNA! To so slogane in realnost
      katero marsikdo dozivel in zivi se zdaj v tem trenutku...ja ja/da da glih v ta trenutku, ko VI gledajte ta sliko!!! Ta slika podzavestno izrazanje cloveka,
      kateri je bil rojen v Sovetske Zveze 1988 in leta 2019 izrazil, oziroma probal izrazit zelo mali delcek svojih custv, katere so nabrali v casu premikanja v smer cudovite Slovenije,
      katetro v tem trenutku, zelo imam RAD!
      </p>
      <div>
        <img
          src="~assets/img/arts/slika17.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 80 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2018-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika17.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika18" modal-theme="dark" overlay-theme="dark">
      <h2>ČLOVEŠKA RAZDROBLJENOST</h2>
      <p class="predgovor" />
      Cudi me vse ta leta, koliko zivim, kako isti ljude znajo biti drugace...po dnevi zelo dobre, zvecer henavske, po noc nesramne in izdajalske brez razloga! Mislim, da sem
      bil posten do razlicnih ljudi, razlicne narodnosti in religije, ker ce hocem spostovanja do sebe, spostujem druge! Ampak verjetno, to v nasi narave da tak imenovani psihicno mocnejci
      osebe potunkajo ali probajo potunkat sibkejsih... in potem se nastane notralni naravni konflikt samega sebe proti sebe. Jaza, zamera, jok, energija, emocionalna explozija ... to smo mi ljude,
      vedno je bilo tak in bo naprej... to je nasa narava! Pametni se ucijo na svojih napakah, zahojene bedaki jih veckratno se ponavljajo... tak je life!
      </p>
      <div>
        <img
          src="~assets/img/arts/slika18.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 80 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2019-2020
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika18.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika19" modal-theme="dark" overlay-theme="dark">
      <h2>FUCK THE SYSTEM</h2>
      <p class="predgovor" />
      Zivimo v zunanjem sistemu, vsak posameznik pa biva v svojem. Veliko vprasanje je ce to odgovorja in ujema z njegovo naravo. Na veliko stvari gledamo
      z roza ocalami, ker z normalnim clovenskim pogledom ni mogoce gledati na realnost. Eni se zamotijo z umetnimi sproscujocimi stvarmi, drugi
      razvijajo sami sebe. Spremeni svoj notranji sistem in spremenil bos zunanjega. Vecina ljudi ne bo nikoli sprejela, da ni srecna in zeleli delati to kar
      hocejo delati. Ce razvijes notranji svet in ves kaj hoces v zivljenju to je prvi korak za spremembo zunanjega sistema/sveta. Sirsi pogled na svet
      in se razvijat, to vsak lahko. Vprasanje pa je ali najde moč.
      </p>
      <div>
        <img
          src="~assets/img/arts/slika19.jpg"
          alt="slide"
          class="pictureInModal"
        >
      </div>
      <p class="slika-info">
        {{ $t('measurements') }} 100 x 80 cm <br>
        {{ $t('technique') }} {{ $t('MixedAkril') }} <br>
        {{ $t('year') }} 2018-2019
      </p>
      <div class="read-more">
        <a class="button" @click="$refs.slika19.close()">{{ $t('back') }}</a>
      </div>
    </sweet-modal>
    <sweet-modal ref="slika20" modal-theme="dark" overlay-theme="dark">
      <h2>NI ČASA NI SEKSA</h2>
      <p class="predgovor" />
      Ko si v casu sposoben zadovoljit zensko in zadovoljit sebe, tebe se vrejo harmone, vsaka zenska te zelo prevlaca, tvoj pogled ker gre za njo, cutis napetosti v
      najbolj zanimivih lokacijah svojega telesa...AMPAK!!! Ti si postavil pred sabo celj! Katero moras nardit in se zavedas, da potem bos imel veliko casa za zadovoljstva razlicnega
      kalibra...in sebe tolazis, da se malo treba potrpeti in stisnut zobe, da realiziras projekt, kateri zamisli in prenese tebe vse to , kaj si zelel in dosti vec!
      To je zivljenski pot... dva koraka naprej in ni koraka nazaj! Dobis vse kaj si se zasluzil!
      </p>
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
