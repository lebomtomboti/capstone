<template>
  <div class="admin-view">
    <h1>Add New Product</h1>
    <form @submit.prevent="handleAddProduct">
      <div>
        <label for="name">Product Name:</label>
        <input v-model="productName" id="name" type="text" required />
      </div>
      <div>
        <label for="url">Product URL:</label>
        <input v-model="productUrl" id="url" type="url" required />
      </div>
      <div>
        <label for="imageUrl">Product Image URL:</label>
        <input v-model="productImageUrl" id="imageUrl" type="url" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'; // Assuming you use axios for HTTP requests

export default {
  name: 'AdminView',
  setup() {
    const productName = ref('');
    const productUrl = ref('');
    const productImageUrl = ref('');
    const successMessage = ref('');

    const addProduct = async () => {
      try {
        const response = await axios.post('/api/products', {
          name: productName.value,
          url: productUrl.value,
          imageUrl: productImageUrl.value,
        });
        console.log('Product added:', response.data);
        successMessage.value = 'New product successfully added!';
        // Clear the form
        productName.value = '';
        productUrl.value = '';
        productImageUrl.value = '';
      } catch (error) {
        console.error('Error adding product:', error);
        successMessage.value = 'Error adding product. Please try again.';
      }
    };

    const handleAddProduct = async () => {
      await addProduct();
    };

    return {
      productName,
      productUrl,
      productImageUrl,
      successMessage,
      handleAddProduct
    };
  }
};
</script>

<style scoped>
.admin-view {
  padding: 20px;
}

form div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

p {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

p.success {
  color: green;
}

p.error {
  color: red;
}
</style>






  