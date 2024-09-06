// App.vue
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterComp />
    <SpinnerComp />
    <CartView  />
  </div>
</template>

<script>
import Navbar from './components/NavBarComp.vue'; 
import FooterComp from './components/FooterComp.vue'; 
import SpinnerComp from './components/SpinnerComp.vue';
import CartView from './views/CartView.vue';

export default {
  components: {
    Navbar,
    FooterComp,
    SpinnerComp,
    CartView,
  },
  data() {
    return {
      someCondition: true, // or false
    };
  },
};
</script>







