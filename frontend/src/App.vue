<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterComp />
    <SpinnerComp />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'; 
import FooterComp from './components/FooterComp.vue'; 
import SpinnerComp from './components/SpinnerComp.vue';

export default {
  components: {
    Navbar,
    FooterComp,
    SpinnerComp
  }
}
</script>

