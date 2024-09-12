<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td><img :src="item.imageUrl" alt="Item Image" class="item-image" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <a :href="item.url" target="_blank">{{ item.url }}</a>
              </td>
              <td>
                <button @click="editItem(item.id)">Edit</button>
                <button @click="removeItem(item.id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="add-item-button" @click="addItem">Add New Item</button>
    </div>
    <Checkout />
  </div>
</template>

<script>
import { ref } from 'vue';
import Checkout from '../components/CheckoutComp.vue';

export default {
  name: 'CartView',
  components: {
    Checkout
  },
  setup() {
    const cartItems = ref([
      { id: 1, name: 'Product 1', quantity: 1, url: 'https://example.com/product1', imageUrl: 'https://via.placeholder.com/100' },
      { id: 2, name: 'Product 2', quantity: 2, url: 'https://example.com/product2', imageUrl: 'https://via.placeholder.com/100' }
    ]);

    const addItem = () => {
      const url = prompt('Enter URL for new item:', 'https://example.com/new-product');
      const imageUrl = prompt('Enter image URL for new item:', 'https://via.placeholder.com/100');
      if (url && imageUrl) {
        const newItem = { id: Date.now(), name: 'New Product', quantity: 1, url, imageUrl };
        cartItems.value.push(newItem);
      }
    };

    const editItem = (id) => {
      const item = cartItems.value.find(item => item.id === id);
      if (item) {
        const newQuantity = prompt('Enter new quantity:', item.quantity);
        if (newQuantity !== null) {
          item.quantity = Number(newQuantity);
        }

        const newUrl = prompt('Enter new URL:', item.url);
        if (newUrl !== null) {
          item.url = newUrl;
        }

        const newImageUrl = prompt('Enter new image URL:', item.imageUrl);
        if (newImageUrl !== null) {
          item.imageUrl = newImageUrl;
        }
      }
    };

    const removeItem = (id) => {
      cartItems.value = cartItems.value.filter(item => item.id !== id);
    };

    return {
      cartItems,
      addItem,
      editItem,
      removeItem
    };
  }
}
</script>

<style scoped>
.cart-page {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

/* Responsive Table */
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  min-width: 600px; /* Minimum width to handle content */
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.add-item-button {
  padding: 10px 20px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-item-button:hover {
  opacity: 0.8;
}

a {
  color: #6c63ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.item-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .cart-page {
    padding: 10px;
  }

  table {
    min-width: 100%; /* Ensure table is responsive */
    font-size: 14px; /* Adjust font size for smaller screens */
  }

  th, td {
    padding: 6px; /* Adjust padding for smaller screens */
  }

  .item-image {
    max-width: 80px; /* Adjust image size for smaller screens */
  }

  button, .add-item-button {
    padding: 8px 15px; /* Adjust button size for smaller screens */
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 20px; /* Adjust heading size for very small screens */
  }
}
</style>






  
  