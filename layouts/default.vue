<template>
  <div id="app">
    <div class="header">
      <!-- <div class="nav">
        <ul class=menu-bar>
          <li>About us</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> -->
    </div>
    <nuxt />
  </div>
</template>

<script>

export default {
}
</script>


<style>
* {
  padding: 0px;
  margin: 0px;
}
.header {
  width: 100%;
}
.nav .menu-bar {
  width: 100%;
  text-align: center;
  box-shadow: 1px 2px 4px grey;
  background: transparent;
  position: absolute;

}
.menu-bar li {
  list-style-type: none;
  display: inline-block;
  padding: 20px;
  margin: 0px 30px;
  font-size: 1.4em;
  cursor: pointer;
  font-weight: 400;
  color: white;
  border: none;
  text-transform: uppercase;
}
.menu-bar li:hover {
  background:rgba(125, 207, 182, 0.8);
  color: white;
}
</style>