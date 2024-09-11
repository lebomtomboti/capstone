<!---<template>
    <div>
      <h1>Products</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="products.length">
        <li v-for="product in products" :key="product.id">
          <h2>{{ product.name }}</h2>
          <p>${{ product.price.toFixed(2) }}</p>
          <p>{{ product.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['products', 'loading', 'error'])
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      ...mapActions(['fetchProducts'])
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style> -->
  <template>
    <div>
      <main class="container-fluid">
        <!-- Heading -->
        <div class="container text-center mt-5 mb-4">
          <h2>Our Products</h2>
          <!-- Search Input -->
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Search by name"
            aria-label="Search by name"
          />
          <!-- Sort Button -->
          <button class="btn btn-secondary mt-3" @click="sortByPrice">
            Sort by Price
          </button>
        </div>
  
        <!-- Product Cards Grid -->
        <div class="container">
          <div class="products-grid">
            <div class="product-card" v-for="product in filteredProducts" :key="product.id">
              <img :src="product.image" class="product-image" alt="Product Image">
              <div class="product-info">
                <h5 class="product-title">{{ product.description }}</h5>
                <p class="product-price">{{ formatPrice(product.price) }}</p>
                <button class="btn btn-primary" @click="addToCart(product)">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          // Example products data
          { id: 1, description: 'Product 1', image: 'https://via.placeholder.com/150', price: 150000.99 },
          { id: 2, description: 'Product 2', image: 'https://via.placeholder.com/150', price: 20000.99 },
          { id: 3, description: 'Product 3', image: 'https://via.placeholder.com/150', price: 25000.99 },
          { id: 4, description: 'Product 4', image: 'https://via.placeholder.com/150', price: 10000.99 },
          { id: 5, description: 'Product 5', image: 'https://via.placeholder.com/150', price: 160000.99 },
          { id: 6, description: 'Product 6', image: 'https://via.placeholder.com/150', price: 50000.99 }
        ],
        cart: [], // Array to hold cart items
        sortAsc: true, // Flag to toggle sort direction
        searchQuery: '' // The search query for filtering
      };
    },
    computed: {
      filteredProducts() {
        // Filter products based on the search query
        const query = this.searchQuery.toLowerCase();
        return this.products.filter(product =>
          product.description.toLowerCase().includes(query)
        );
      }
    },
    methods: {
      formatPrice(price) {
        return `R${price.toFixed(2)}`; // Format price with R and two decimal places
      },
      addToCart(product) {
        // Check if the product is already in the cart
        const existingProduct = this.cart.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1; // Increase quantity if already in cart
        } else {
          this.cart.push({ ...product, quantity: 1 }); // Add new product to cart with quantity 1
        }
        alert(`${product.description} has been added to the cart!`); // Optional: show an alert
      },
      sortByPrice() {
        // Toggle sorting direction
        this.sortAsc = !this.sortAsc;
        // Sort products based on the current direction
        this.products.sort((a, b) => this.sortAsc ? a.price - b.price : b.price - a.price);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Grid container */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Smaller minimum column width */
    gap: 10px; /* Reduced space between cards */
  }
  
  /* Card styling */
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Reduced shadow */
    display: flex;
    flex-direction: column;
    height: 200px; /* Reduced height for shorter cards */
  }
  
  /* Image styling */
  .product-image {
    width: 100%;
    height: 80px; /* Further reduced height for the image */
    object-fit: cover;
  }
  
  /* Content styling */
  .product-info {
    padding: 8px; /* Reduced padding */
    text-align: left;
    flex: 1; /* Make content area grow to fill the card */
  }
  
  .product-title {
    font-size: 0.875rem; /* Smaller font size for the title */
    margin-bottom: 0.5rem;
  }
  
  .product-price {
    font-size: 0.75rem; /* Smaller font size for the price */
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .btn-primary {
    background-color: #6c63ff;
    border: none;
    border-radius: 4px;
    padding: 6px 10px; /* Smaller padding */
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 0.75rem; /* Smaller font size for the button */
  }
  
  .btn-primary:hover {
    background-color: #5a54e0;
  }
  
  /* Ensure two cards per row */
  @media (min-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr); /* Two columns per row */
    }
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .product-info {
      text-align: center;
    }
  }
  </style>
  
  
  
  
  
  
  
  
  
  