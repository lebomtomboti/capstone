<template>
    <div>
      
      <main>
        <slot></slot> 
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  body {
  background-color: #6EC1E4; 
  color: black; 
}

p {
  color: black; 
}

/* Navbar styles */
.navbar {
  background-color: transparent; 
}

.navbar-brand img {
  max-width: 200px; 
}

.navbar-nav .nav-link {
  color: white; 
  transition: color 0.3s; 
}

.navbar-nav .nav-link:hover {
  color: black; 
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-item:hover {
  background-color: white; 
}

/* Contact form styles */
.form-horizontal {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;  
  border-radius: 10px;
}

.form-control {
  margin-bottom: 15px;
  border-radius: 5px;
}

textarea.form-control {
  resize: vertical; 
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button {
  width: 100%;
  border-radius: 5px;
  background-color: black; 
  color: white; 
  border: none;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #333; 
}

.bi-send {
  margin-right: 5px; 
}

/* Card styles */
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: black;
}

.card-text {
  font-size: 1rem;
  color: gray;
}

.card-text.mt-2 {
  font-size: 1.2rem;
  color: black;
}

.btn-dark {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-dark:hover {
  background-color: #555;
}

/* Footer styles */
footer {
  background-color: black; 
  color: white; 
  padding: 10px 0;
}

/* Dropdown styles */
.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Specific product card styles */
#ProductCard {
  width: 200px;
  height: 410px;
}

#Product-Card {
  width: 200px;
  height: 410px;
  margin-bottom: 32px;
}

.card-img-top {
  height: 300px;
}

/* Responsive styles */
.half {
  width: calc(50% - 10px);
}

/* Miscellaneous styles */
.details {
  color: black;
  margin-bottom: 200px;
}

span {
  color: black;
  margin-bottom: 200px;
}
  </style>
  
  