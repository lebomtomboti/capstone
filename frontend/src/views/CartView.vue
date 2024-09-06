<template>
    <div>
      <h1>Shopping Cart</h1>
  
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>
              <button class="update-btn" @click="updateItem(index)">Update</button>
              <button class="delete-btn" @click="deleteItem(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="action-btns">
        <button class="add-btn" @click="addItem">Add Item</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: 'Item 1', quantity: 1, price: 19.99 },
          { name: 'Item 2', quantity: 2, price: 9.99 },
          // Add initial items as needed
        ]
      };
    },
    methods: {
      addItem() {
        this.cartItems.push({ name: 'New Item', quantity: 1, price: 0.00 });
      },
      updateItem(index) {
        this.cartItems[index].quantity += 1; // Example action
      },
      deleteItem(index) {
        this.cartItems.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table, th, td {
    border: 1px solid #ddd;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .add-btn {
    background-color: #4CAF50; /* Green */
  }
  
  .update-btn {
    background-color: #2196F3; /* Blue */
  }
  
  .delete-btn {
    background-color: #f44336; /* Red */
  }
  
  .action-btns {
    margin-top: 20px;
  }
  </style>
  
  