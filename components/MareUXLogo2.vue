<template>
  <div class="logo-container">
    <div class="logo-text">{{ $t('developedBy') }}</div>
    <a href="http://mare-ux.com/" target="_ blank">
      <img
        class="mare-podpis"
        src="~assets/logo/mareUX-logo_W.svg"
        alt="MareUX"
    /></a>
  </div>
</template>

<style scoped>
.logo-container {
  position: absolute;
  right: 10px;
}
.mare-podpis {
  display: block;
  width: 150px;
}
.logo-text {
  color: white;
  font-size: 0.8em;
  margin-bottom: -20px;
}
@media screen and (max-width: 680px) {
  .mare-podpis {
    width: 80px;
  }
  .logo-text {
    font-size: 0.6em;
    padding: 8px;
  }
}
@media only screen 
and (min-device-width : 500px) 
and (max-device-width : 920px) 
and (orientation : landscape) {
  .logo-container {
  position: absolute;
  bottom: -80px;
}
}
</style>