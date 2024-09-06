<template>
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
  </style>
  
  