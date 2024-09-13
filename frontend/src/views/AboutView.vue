<template>
  <div>
    <main class="container-fluid text-center">
      <div class="container">
        <h2 class="mt-5">About Us</h2>
      </div>
      <div class="container">
        <div class="about-grid">
        
          <div class="about-image">
            <img src="https://lebomtomboti.github.io/capictures/Screenshot%202024-09-03%20144340.png" alt="iPhone Zone" class="img-fluid rounded" />
          </div>

          <div class="about-content">
            <p class="head6">
              Welcome to iPhone Zones, your premier destination for the latest and most affordable iPhones.
              Located in the heart of Cape Town, we specialize in bringing you the best in Apple’s smartphone technology without breaking the bank.

              At iPhone Zones, we are dedicated to offering a curated selection of the newest iPhone models.
              Our commitment is to provide you with cutting-edge technology at prices that suit your budget. 
              Whether you're looking for the latest flagship device or a more budget-friendly option, our inventory is designed to meet diverse needs and preferences.

              We understand that purchasing a new phone is a significant investment.
              That's why we focus on ensuring that our offerings provide exceptional value.
              Our knowledgeable staff is always available to guide you through our selection, ensuring you find the perfect device to fit your lifestyle and requirements.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      currentPage: 'About',
      currentYear: new Date().getFullYear()
    };
  },
  mounted() {
    this.setCurrentYear();
  },
  methods: {
    setCurrentYear() {
      this.currentYear = new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
/* Grid container */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Space between columns */
  align-items: center;
}

/* Image styling */
.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Optional rounded corners */
}

/* Content styling */
.about-content {
  text-align: left;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr; /* Stack columns vertically on small screens */
  }

  .about-content, .about-image {
    text-align: center;
  }
  
  .about-image img {
    width: 100%; /* Ensure image takes full width on small screens */
    height: auto; /* Maintain aspect ratio */
  }
}

/* General styling for text */
.head6 {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}
</style>





