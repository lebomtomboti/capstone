<template>
  <div>
    <h1>Cart</h1>

  
    <form @submit.prevent="addOrUpdateProduct">
      <div>
        <label for="product-name">Product Name:</label>
        <input type="text" v-model="form.name" id="product-name" required />
      </div>
      <div>
        <label for="product-price">Price:</label>
        <input type="number" v-model="form.price" id="product-price" required />
      </div>
      <div>
        <label for="product-quantity">Quantity:</label>
        <input type="number" v-model="form.quantity" id="product-quantity" required />
      </div>
      <button type="submit">{{ form.id ? 'Update Product' : 'Add Product' }}</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ (product.price * product.quantity).toFixed(2) }}</td>
          <td>
            <button @click="editProduct(product)">Edit</button>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        name: '',
        price: 0,
        quantity: 1
      },
      products: [],
    };
  },
  methods: {
    addOrUpdateProduct() {
      if (this.form.id) {
        
        const index = this.products.findIndex(p => p.id === this.form.id);
        if (index !== -1) {
          this.products[index] = { ...this.form };
        }
      } else {
        
        const newProduct = { ...this.form, id: Date.now() };
        this.products.push(newProduct);
      }

     
      this.form = { id: null, name: '', price: 0, quantity: 1 };
    },
    editProduct(product) {
      this.form = { ...product };
    },
    deleteProduct(id) {
      this.products = this.products.filter(p => p.id !== id);
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

form div {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  background-color: #f4f4f4;
}

button {
  margin-right: 5px;
}
</style>







  
  