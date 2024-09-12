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
          <div class="products-grid" v-if="productsLoaded">
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
          <div v-else>
            <p>Loading products...</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [], // Initialize products as an empty array
        searchQuery: '',
        productsLoaded: false // Add a loading state
      }
    },
    computed: {
  filteredProducts() {
    console.log(this.products); // Check the products array
    // Filter products based on the search query
    const query = this.searchQuery.toLowerCase();
    if (Array.isArray(this.products)) {
      return this.products.filter(product => {
        // Filter logic here
        return product.name.toLowerCase().includes(query);
      });
    } else {
      return [];
    }
  }
},
    methods: {
      async fetchProducts() {
  try {
    const response = await axios.get('https://capstone-tlul.onrender.com/products');
    console.log(response.data); // Check the response data
    this.products = response.data; // Make sure response.data is an array
    this.productsLoaded = true; // Set the loading state to true
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
},
    mounted() {
      this.fetchProducts(); // Call fetchProducts when the component is mounted
    }
  }
}
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
  </style>