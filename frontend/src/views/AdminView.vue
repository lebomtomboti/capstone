<template>
    <div>
      <!-- Navbar -->
     <!--- <nav class="navbar navbar-expand-lg bg-body-secondary">
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
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Cart' }" to="/cart">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Admin' }" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: currentPage === 'Contact' }" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
  
      <!-- Main Content -->
      <main class="container-fluid">
        <div class="container text-end mt-3 mb-0">
          <button class="btn btn-dark" type="button" aria-expanded="false" @click="sortByPrice">
            Sort by Price
          </button>
        </div>
  
        <div class="container mt-3" id="table">
          <table class="table mt-5 m-0 text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody id="Products-data">
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.description }}</td>
                <td><img :src="product.image" alt="Product Image" width="50" /></td>
                <td>${{ product.price.toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
  
          <table class="SecTeb d-none d-md-block">
            <thead>
              <tr>
                <th><input type="text" placeholder="Description" v-model="newProduct.description" required /></th>
                <th><input type="text" placeholder="Image URL" v-model="newProduct.image" required /></th>
                <th><input type="number" placeholder="Price" v-model="newProduct.price" required /></th>
                <th>
                  <button class="btn btn-dark" type="button" @click="addProduct">
                    Add Product
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </main>
  
    
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      products: [], // Array to hold product data in Rands
      newProduct: {
        id: '',
        description: '',
        image: '',
        price: 0, // Price in Rands
      },
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    sortByPrice() {
      this.products.sort((a, b) => a.price - b.price); // Sort prices in Rands
    },
    addProduct() {
      if (this.newProduct.description && this.newProduct.image && this.newProduct.price) {
        this.newProduct.id = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
        this.products.push({ ...this.newProduct });
        this.newProduct = { id: '', description: '', image: '', price: 0 };
      } else {
        alert('Please fill in all fields.');
      }
    },
    formatPrice(price) {
      return `R${price.toFixed(2)}`; // Format price with R and two decimal places
    },
  },
};
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
  color: aliceblue;
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
  color: aliceblue;
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
</style>
 
  
  