<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.prodID">
        {{ product.prodName }} - {{ product.prodAmount }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts;
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>

