<template>
    <div class="checkout">
      <h2>Checkout</h2>
      <form @submit.prevent="processCheckout">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="address" required />
        </div>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'CheckoutComp',
    setup() {
      const name = ref('');
      const address = ref('');
  
      const processCheckout = () => {
        // Implement checkout logic here
        alert(`Processing checkout for ${name.value} at ${address.value}`);
      };
  
      return {
        name,
        address,
        processCheckout
      };
    }
  }
  </script>
  
  <style scoped>
  .checkout {
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>
  