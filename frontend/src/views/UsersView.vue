<template>
    <div class="users-view">
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'; // Assuming you're using Axios for data fetching
  
  export default {
    name: 'UsersView',
  
    setup() {
      // Create a reactive reference to hold user data
      const users = ref([]);
  
      // Fetch user data when the component is mounted
      onMounted(async () => {
        try {
          const response = await axios.get('https://api.example.com/users'); // Replace with your API endpoint
          users.value = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      });
  
      return {
        users
      };
    }
  };
  </script>
  
  <style scoped>
  .users-view {
    padding: 20px;
  }
  .users-view h1 {
    font-size: 24px;
  }
  .users-view ul {
    list-style-type: none;
    padding: 0;
  }
  .users-view li {
    margin: 10px 0;
  }
  </style>
  