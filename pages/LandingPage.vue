<template>
    <div>
        <section>
            <input type="checkbox" id="check"> 
            <header>
                <h2><a href="#" class="logo">EXPAR STORE</a></h2>
                <div class="navigation">
                    <a href="#">Use cases</a>
                    <a href="#">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#">Demo</a>
                    <router-link class="login-btn" :to="{ name: 'login' }">Login</router-link>
                </div>
                <label for="check">
                    <font-awesome-icon  id="menu-btn" :icon="['fas', 'bars']" />
                    <font-awesome-icon  id="close-btn" :icon="['fas', 'times']" />
                </label>
            </header>
            <!-- <div class="svg-animation">
                <img src="../assets/static/images/undraw_shopping_app_flsj.svg">
            </div> -->
            <div class="content">
                <div class="info">
                    <h2>Experience shopping <br><span>in your unit</span></h2>
                    <p>Platform designed as a multi-unit on-demand m-commerce web application. </p>
                    <a href="#" class="info-btn">More Info</a>
                </div>
            </div>
            <div class="media-icons">
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="#"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
            </div>
        </section>
        <!-- OUR SERVICE section ----->
        <br/>
        <br/>
        <div class="pricing-header px-3 py-6 pt-md-5 pb-md-4 mx-auto text-center border-top">
            <h3 id="pricing">Use it for free for 14 days</h3>
            <p><strong>Amage your guests</strong> with effortless purchase experience. Try Expar store for 14 days for FREE!</p>
        </div>
        <br/>
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal"><span>1</span><br/>unit store</h4>
                    </div>
                    <div class="card-body">
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-monthly">15 € <small>/ month</small></button>
                      <br/>
                      <p>or <br/> choose yearly plan <br/>(save <strong>10 %</strong>)</p>
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-yearly">150 € <small>/ year</small></button>
                      <br/>
                      <hr/>
                      <h1 class="card-title pricing-card-title"><small class="text-muted">Package includes:</small></h1>
                        <ul class="list-unstyled mt-3 mb-4 package">
                          <li>&#10004;<span>    3 dasboards</span></li>
                          <li>&#10004;<span>    3 accounts</span></li>
                          <li>&#10004;<span>    50 MB storage</span></li>
                          <li>&#10004;<span>    Email support</span></li>
                          <li>&#10004;<span>    Help center access</span></li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Up to <span>5</span><br/>unit stores</h4>
                    </div>
                    <div class="card-body">
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-monthly">60 € <small>/ month</small></button>
                      <br/>
                      <p>or <br/> choose yearly plan <br/>(save <strong>15 %</strong>)</p>
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-yearly">500 € <small>/ year</small></button>
                      <br/>
                      <hr/>
                      <h1 class="card-title pricing-card-title"><small class="text-muted">Package includes:</small></h1>
                        <ul class="list-unstyled mt-3 mb-4 package">
                          <li>&#10004;<span>    3 dasboards</span></li>
                          <li>&#10004;<span>    5 accounts</span></li>
                          <li>&#10004;<span>    500 MB storage</span></li>
                          <li>&#10004;<span>    Email support</span></li>
                          <li>&#10004;<span>    Help center access</span></li>
                        </ul>
                    </div>
                </div>
               <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Up to <span>10</span><br/>unit stores</h4>
                    </div>
                    <div class="card-body">
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-monthly">100 € <small>/ month</small></button>
                      <br/>
                      <p>or <br/> choose yearly plan <br/>(save <strong>12 %</strong>)</p>
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-yearly">1000 € <small>/ year</small></button>
                      <br/>
                      <hr/>
                      <h1 class="card-title pricing-card-title"><small class="text-muted">Package includes:</small></h1>
                        <ul class="list-unstyled mt-3 mb-4 package">
                          <li>&#10004;<span>    3 dasboards</span></li>
                          <li>&#10004;<span>    10 accounts</span></li>
                          <li>&#10004;<span>    500 MB storage</span></li>
                          <li>&#10004;<span>    Email support</span></li>
                          <li>&#10004;<span>    Help center access</span></li>
                        </ul>
                    </div>
                </div>
               <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal"><span>+10</span><br/>unit stores</h4>
                    </div>
                    <div class="card-body">
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-monthly">250 € <small>/ month</small></button>
                      <br/>
                      <p>or <br/> choose yearly plan <br/>(save <strong>12 %</strong>)</p>
                      <button type="button" class="btn btn-lg btn-block btn-outline-primary btn-yearly">2000 € <small>/ year</small></button>
                      <br/>
                      <hr/>
                      <h1 class="card-title pricing-card-title"><small class="text-muted">Package includes:</small></h1>
                        <ul class="list-unstyled mt-3 mb-4 package">
                          <li>&#10004;<span>    3 dasboards</span></li>
                          <li>&#10004;<span>    20 accounts</span></li>
                          <li>&#10004;<span>    2 GB storage</span></li>
                          <li>&#10004;<span>    Email support</span></li>
                          <li>&#10004;<span>    Help center access</span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <!-- end of OUR SERVICE section ----->

            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-12 col-md">
                        <img class="mb-2" src="../assets/static/images/expar_32x32px.png" alt="logo" width="24" height="24"> EXPAR store&#8482;
                        <small class="d-block mb-3 text-muted">Copyright &copy; {{ new Date().getFullYear() }}</small>
                    </div>
                    <div class="col-6 col-md footerColumn">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">   
                            <li><a class="text-muted" href="#">Team</a></li>
                            <li><a class="text-muted" href="#">Company profile</a></li>       
                        </ul>
                    </div>
                    <div class="col-6 col-md footerColumn">
                        <h5>Let us know how we did servig your business</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Send Feedback</a></li>
                            <li><a class="text-muted" href="#">Rate us</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md footerColumn">
                        <h5>Legal</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Privacy Policy</a></li>
                            <li><a class="text-muted" href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

:root {
  --bg: rgb(44, 62, 80);
  --bg-light: rgb(56, 80, 104);
  --primary: #b97b42;
  --bright: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.pricing-header h3 {
  font-size: 4em;
  margin-bottom: 0.5em;
}


section{
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url("../assets/static/images/hero_expar.jpg")no-repeat;
  background-size: cover;
  background-position: center;
}

header{
  position: relative;
  top: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo{
  position: relative;
  color: #000;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

header .navigation a{
  color: #000;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2px 15px;
  border-radius: 20px;
  transition: 0.3s;
  transition-property: background;
}

header .navigation a:not(:last-child){
  margin-right: 30px;
}

header .navigation a:hover{
  background: #fff;
}

.btn-monthly {
    background: var(--primary);
    border: none;
    font-size: 2em;
    padding: 10px;
    color: var(--bright);
}

.btn-monthly:hover {
    color: var(--primary);
    background:var(--bg);
}

.btn-yearly {
    background: rgba(185, 123, 66, 0.2);
    border: var(--primary);
    padding: 10px;
    color: var(--bg);
}

.btn-yearly:hover {
    color: var(--bright);
    background: var(--primary);
}

.package {
    text-align: left;
    margin-left: 30px;
}

.card-header span {
  font-size: 3em;
}

.content{
  max-width: 650px;
  margin: 60px 100px;
}

.content .info{
background-color: var(--bg-light) !important;
padding: 20px;
}

.content .info h2{
  text-align: left;
  color: var(--primary);
  font-size: 55px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 60px;
  margin-bottom: 30px;
}

.content .info h2 span{
  color: #fff;
  font-size: 50px;
  font-weight: 600;
}

.content .info p{
  color: #fff;
  font-size: 30px;
  text-align: justify;
  font-weight: 500;
  margin-bottom: 40px;
}
.navigation .login-btn
{
  color: #fff;
  background: var(--primary);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.navigation .login-btn:hover{
  background: #0C4F60;
}
.check {
  color: var(--br) !important;
}

.content .info-btn
{
  color: #fff;
  background: var(--primary);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  transition-property: background;
}

.content .info-btn:hover{
  background: #0C4F60;
}

.media-icons{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.media-icons a{
  position: relative;
  color: #111;
  font-size: 25px;
  transition: 0.3s;
  transition-property: transform;
}

.media-icons a:not(:last-child){
  margin-right: 60px;
}

.media-icons a:hover{
  transform: scale(1.5);
  color: var(--primary);
}

label{
  display: none;
}

#check{
  z-index: 3;
  display: none;
}

  .footerColumn {
    text-align: left;
  }
  footer h5 {
    padding-left: 24px;
  }
/* Responsive styles */

@media (max-width: 1100px){
  section {
      background: linear-gradient(16deg, rgba(76,158,134,1) 0%, rgba(61,113,109,1) 8%, rgba(47,71,85,1) 38%, rgba(44,62,80,1) 47%, rgba(44,62,80,1) 50%, rgba(44,62,80,1) 80%);  /* background: url("../assets/static/images/background.png")no-repeat; */
  }
}

@media (max-width: 960px){

    header {
        padding: 30px 30px;
    }

  header .navigation{
    display: none;
  }

  label{
    display: block;
    font-size: 25px;
    cursor: pointer;
    transition: 0.05s;
    transition-property: color;
  }

  label:hover{
    color: var(--primary);;
  }

  label #close-btn{
    display: none;
  }
  
  label #close-btn #menu_btn{    
  }

  #check:checked ~ header .navigation{
    z-index: 2;
    position: fixed;
    background: rgba(44, 62, 80, 0.9);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #check:checked ~ header .navigation a{
    font-weight: 700;
    margin-right: 0;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  #check:checked ~ header label #menu-btn{
    display: none;
  }
  #check:checked ~ header label #close-btn{
    z-index: 2;
    display: block;
    position: fixed;
  }
  label .menu-btn{
    position: absolute;
  }
  header .logo{
    position: absolute;
    bottom: -6px;
  }
  .content .info h2{
    font-size: 45px;
    line-height: 50px;
  }
  .content .info h2 span{
    font-size: 40px;
    font-weight: 600;
  }
  .content .info p{
    font-size: 18px;
  }
}

@media (max-width: 560px){
  .content {
      margin: 70px 30px;
  }
  .content .info h2{
    font-size: 35px;
    line-height: 40px;
  }
  .content .info h2 span{
    font-size: 30px;
    font-weight: 600;
  }
  .content .info p{
    font-size: 14px;
  }
.card-deck .card {
  min-width: 220px;
  padding: 10px;
}
}

/* END OF HEADER / HERO syles */

/* OUR SERVICE syles */

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 1300px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }


</style>