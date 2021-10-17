<template>
  <div>
    <div class="langMenu">
      <nuxt-link :to="switchLocalePath('sl')" class="language">
        SL
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('en')" class="language">
        EN
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.langMenu {
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
}

.language {
  color: white;
  font-size: 1.8em;
  margin: 0.5em;
}
.language:hover {
  color: rgb(125, 207, 182);
  text-decoration-line: none;
}

@media screen and (max-width: 680px) {
  .language {
    font-size: 1em;
    margin: 0.2em;
  }
}
</style>
