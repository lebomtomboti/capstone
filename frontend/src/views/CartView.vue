<template>
  <div>
    <h2>Cart</h2>
    <!-- Display success message for item operations -->
    <div v-if="showSuccessMessage" class="alert alert-success">
      {{ successMessage }}
    </div>
    <!-- Display error message if needed -->
    <div v-if="showErrorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <ul v-if="cartItems.length">
      <li v-for="item in cartItems" :key="item.id">
        <div class="cart-item">
          <img :src="item.image" class="cart-item-image" alt="Product Image">
          <div class="cart-item-info">
            <h5>{{ item.description }}</h5>
            <p>{{ formatPrice(item.price) }}</p>
            <input type="number" v-model.number="item.quantity" @change="updateCart(item)" min="1" />
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
      </li>
    </ul>

    <p v-else>Your cart is empty</p>

    <div v-if="cartItems.length">
      <p>Total: {{ formatPrice(totalPrice) }}</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
      showSuccessMessage: false,
      showErrorMessage: false,
      successMessage: '',
      errorMessage: ''
    };
  },
  created() {
    this.loadCart();
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    loadCart() {
      try {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      } catch (error) {
        this.errorMessage = 'Failed to load cart.';
        this.showErrorMessage = true;
      }
    },
    formatPrice(price) {
      return `R${price.toFixed(2)}`;
    },
    updateCart(updatedItem) {
      if (updatedItem.quantity <= 0) {
        this.removeFromCart(updatedItem.id);
      } else {
        this.cartItems = this.cartItems.map(item =>
          item.id === updatedItem.id ? updatedItem : item
        );
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.successMessage = 'Cart updated successfully!';
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 2000); // Hide after 2 seconds
      }
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.successMessage = 'Item removed from cart.';
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 2000); // Hide after 2 seconds
    },
    checkout() {
      // Implement checkout logic
      console.log('Proceeding to checkout...');
      // Redirect to checkout page if needed
      this.$router.push({ name: 'checkout' });
    }
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-info {
  flex: 1;
}

.alert {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}
</style>

  
  