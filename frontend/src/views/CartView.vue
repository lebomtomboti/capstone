// CartPage.vue
<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} ({{ item.quantity }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    cartItems() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    }
  }
}
</script>
  
  <style scoped>
  /* Cart page styles */
  .cart-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  
  .cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 15px;
  }
  
  .cart-item-info {
    flex: 1;
  }
  
  .cart-item-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .cart-item-price {
    font-size: 0.875rem;
    color: #333;
  }
  </style>
  
  
  