<!---<template>
  <div>
     Navbar -->
   <!---- <nav class="navbar navbar-expand-lg bg-body-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="https://lebomtomboti.github.io/cpstpictrs/iphone%20zone%20(1).png"
            class="navbar-brand" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Home' }" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'About' }" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Products' }" to="/products">Products</router-link>
            </li>
            <li class="nav-item ml-auto">
          <a class="nav-link" href="#">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </a>
        </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Admin' }" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Login' }" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Contact' }" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Main Content -->
   <!--- <main class="container-fluid">
      <div class="container text-center">
        <div class="Name">
          <span style="--i: 1">w</span>
          <span style="--i: 2">e</span>
          <span style="--i: 3">l</span>
          <span style="--i: 4">c</span>
          <span style="--i: 5">o</span>
          <span style="--i: 6">m</span>
          <span style="--i: 7">e</span>
        </div>
        <div class="Name mt-5 mb-5">
          <span style="--i: 1">t</span>
          <span style="--i: 2">o</span>
        </div>
        <div class="Name mt-5 mb-5">
          <span style="--i: 1">i</span>
          <span style="--i: 2">p</span>
          <span style="--i: 3">h</span>
          <span style="--i: 4">o</span>
          <span style="--i: 5">n</span>
          <span style="--i: 6">e</span>
          <span style="--i: 7">z</span>
          <span style="--i: 8">o</span>
          <span style="--i: 9">n</span>
          <span style="--i: 10">e</span>
        </div>
      </div>
    </main>  

  </div>
</template> -->
<!---<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentPage: 'Home',
      currentYear: new Date().getFullYear()
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style scoped>
/* Add your styles here */
.nav-link.active {
  font-weight: bold;
}
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,500&display=swap");

/* Universal Selector */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head6 {
  font-family: "Roboto", sans-serif;
  font-family: "Roboto Slab", serif;
}
::-webkit-scrollbar {
  display: none;
}

Img[alt="Logo"] {
  cursor: pointer;
  width: 5rem;
  aspect-ratio: 1/1;
}

footer {
  margin-top: 210px;
  background-color: #36454f;
}
body {
  background-color: black;
  color: black
}

/* Home Content */
.Name {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 60px;
  margin-top: 170px;
}
.Name span {
  font-family: "Alfa Slab One", cursive;
  color: black;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: Name 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes Name {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}

/* About Content */
#AboutCard {
  width: 200px;
}

/* Product Content */
#ProductCard {
  width: 200px;
  height: 410px;
}

#Product-Card {
  width: 200px;
  height: 410px;
  margin-bottom: 32px;
}

.card-img-top {
  height: 300px;
}

/* Checkout Content */
#footerCheckout {
  margin-top: 100px;
}

#IMG {
  height: 180px;
}
@media screen and (max-width: 460px) {
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table {
      font-size: 1.3em;
    }

    th {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */

      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
}

#Total {
  text-align: center;
}




/*  Contact Content */
#contact {
  width: 100%;
  height: 100%;
  margin-top: 11px;
  padding-top: 50px;
}

.section-header {
  text-align: center;
  margin-top: 17px;
  padding: 40px 0;
  font: 300 60px "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: "Lato";
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  background-color: #ffffffec;
  color: #fff;
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all 0.2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #ffffff;
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: #ffffff;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #ffffff;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.contact-icon {
  color: #fff;
}

.contact-icon {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.contact-icon:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.contact-icon:hover {
  background-color: #fff;
}

.contact-icon:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.contact-icon:hover {
  color: #000;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

/* Media Query */
/* Contact Page */
@media screen and (max-width: 1024px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list a {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list a:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 555px) {
  #contact-form {
    width: 200px;
  }
  #submit {
    width: 200px;
  }
  .alt-send-button {
    margin-left: -100px;
  }
  .direct-contact-container {
    margin-left: 60px;
  }
  .contact-text {
    margin-left: -1px;
  }
}

@media screen and (max-width: 412px) {
  .direct-contact-container {
    margin-left: -10px;
  }
  .contact-text {
    margin-left: -1px;
  }
}
</style> -->


<template>
 <div class="landing-page">
   
   <!--- <header>
      <div class="container">
        <a href="#" class="logo">Your <b>Website</b></a>
        <ul class="links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
          
        </ul>
      </div>
    </header> -->

    <!-- Content -->
    <div class="content">
      <div class="container">
        <div class="info">
          <h1>Looking For Inspiration</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste.</p>
          <router-link to="/products">
            <button class="shop-now-btn">Shop Now</button>
          </router-link>
        </div>
        <div class="image">
          <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Containers */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

/* Landing Page Styles */
.landing-page header {
  min-height: 80px;
  display: flex;
}

@media (max-width: 767px) {
  .landing-page header {
    min-height: auto;
    display: initial;
  }
}

.landing-page header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 767px) {
  .landing-page header .container {
    flex-direction: column;
    justify-content: center;
  }
}

.landing-page header .logo {
  color: #5d5d5d;
  font-style: italic;
  text-transform: uppercase;
  font-size: 20px;
}

@media (max-width: 767px) {
  .landing-page header .logo {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.landing-page header .links {
  display: flex;
  align-items: center;
}

@media (max-width: 767px) {
  .landing-page header .links {
    text-align: center;
    gap: 10px;
  }
}

.landing-page header .links li {
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
  transition: .3s;
}

@media (max-width: 767px) {
  .landing-page header .links li {
    margin-left: auto;
  }
}

.landing-page header .links li.cta {
  border-radius: 20px;
  padding: 10px 20px;
  color: #FFF;
  background-color: #6c63ff;
}

.landing-page header .links li:not(.cta):hover {
  color: #6c63ff;
}

.landing-page .content .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 140px;
  min-height: calc(100vh - 80px);
}

@media (max-width: 767px) {
  .landing-page .content .container {
    gap: 0;
    min-height: calc(100vh - 101px);
    justify-content: center;
    flex-direction: column-reverse;
  }
}

@media (max-width: 767px) {
  .landing-page .content .info {
    text-align: center;
    margin-bottom: 15px;
  }
}

.landing-page .content .info h1 {
  color: #5d5d5d;
  font-size: 44px;
}

.landing-page .content .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #5d5d5d;
}

.landing-page .content .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #FFF;
  background-color: #6c63ff;
}

.landing-page .content .image img {
  max-width: 100%;
}
</style>



