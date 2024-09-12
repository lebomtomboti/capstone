<template>
  <div>
    <h2>All Products</h2>
    <div class="container">
      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.id">
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [] // Array to hold all products
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // Fetch all products from the backend
        const response = await axios.get('/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
    formatPrice(price) {
      return `R${price.toFixed(2)}`; // Format price with R and two decimal places
    },
    addToCart(product) {
      // Example of adding to a cart and redirecting
      console.log('Adding to cart:', product);

      // Navigate to the cart page
      this.$router.push({ name: 'cart' });
    }
  }
};
</script>


<style scoped>
/* Add your styles here */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 300px;
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.product-info {
  padding: 10px;
  text-align: left;
  flex: 1;
}

.product-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 0.875rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.btn-primary {
  background-color: #6c63ff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #5a54e0;
}
</style>


