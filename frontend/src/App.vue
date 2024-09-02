<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'; // Adjust the path as necessary
import FooterComp from './components/FooterComp.vue'; // Adjust the path as necessary

export default {
  components: {
    Navbar,
    FooterComp
  }
}
</script>

