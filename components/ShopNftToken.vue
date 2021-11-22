<template>
  <div class="container">
    <div class="product-card">
      <div class="product-img img-one" />
      <div class="product-text">
        <h3>Logo</h3>
        <p>Logo of our PS Max Zaxsters as FT for collectors, 30 minted</p>
      </div>
      <div class="product-cart">
        <div>
          <button style="background-color: #575382;" onClick="window.location.href='https://tokhun.io/marketplace?project%5B%5D=732&minPrice=&maxPrice=&sortBy=Newest+First&page=1';" type="submit">
            tokhun
          </button>
        </div>
        <div>
          <button style="background-color: #2B3990;" onClick="window.location.href='https://www.galaxyof.art';" type="submit">
            galaxy of art
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background: #2f3640;
  font-size: 1.6em;
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3, p {
  margin: 0;
  padding-bottom: .5em;
}

h3 {
  font-size: 1.2em;
}

p {
  font-size: 1em;
  font-weight: 300;
}

.container {
  display: flex;
  max-width: fit-content;
}

/* PRODUCT CARD */

.product-card {
  background-color: #f5f6fa;
  border-radius: 10px;
  color: #2f3640;
  margin: 0 1em;
  transition: all linear .2s;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover,
.product-card:active {
  box-shadow: .2em .5em .5em rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

.product-img {
  border-radius: 10px 10px 0 0;
  height: 150px;
  max-width: 100%;
}

.img-one {
  background-image: url(~assets/logo/logo_maxZaxster_pixel.jpg);
}

.img-two {
  background-image: url(~assets/img/rosetti/Moonlight_puzzle.jpg);
}

.img-three {
  background-image: url(~assets/img/rosetti/Fire_puzzle.jpg);
}

.img-four {
  background-image: url(~assets/img/rosetti/Suspension_puzzle.jpg);
}

.img-five {
  background-image: url(~assets/img/rosetti/Tire_puzzle.jpg);
}

.img-six {
  background-image: url(~assets/img/rosetti/Transmission_puzzle.jpg);
}

.img-one,
.img-two,
.img-three,
.img-four,
.img-five,
.img-six
{
  background-size: cover;
  background-position: center;
}

.product-text {
  padding: 1em;
  text-align: center;
}

.product-cart button{
  border: 0;
  border-radius: 0 0 10px 10px;
  color: #f5f6fa;
  cursor: pointer;
  font-family: inherit;
  padding: 1em;
  text-transform: uppercase;
  transition: all linear .3s;
  width: 100%;
}

.product-cart button:hover {
  font-weight: 500;
  letter-spacing: .1em;
}

/* color */
.product-card:first-child h3 {
  color: #104ba3;
}

.product-card:first-child button {
  background-color: #104ba3;
}

.product-card:nth-child(2) h3 {
  color: #1c73bb;
}

.product-card:nth-child(2) button {
  background-color: #1c73bb;
}

.product-card:nth-child(3) h3 {
  color: #0097e6;
}

.product-card:nth-child(3) button {
  background-color: #0097e6;
}
.product-card:nth-child(4) h3 {
  color: #104ba3;
}

.product-card:nth-child(4) button {
  background-color: #104ba3;
}

.product-card:nth-child(5) h3 {
  color: #1c73bb;
}

.product-card:nth-child(5) button {
  background-color: #1c73bb;
}

.product-card:last-child h3 {
  color: #0097e6;
}

.product-card:last-child button {
  background-color: #0097e6;
}

/* media queries */
@media screen and (max-width: 860px) {
  .container {
    display: grid;
    grid-column-templates: 1fr;
    grid-auto-rows: auto;
  }

  .product-card {
    margin: 1.5em auto;
  }
}
</style>
