<template>
    <nav class="sidebar">
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/barang">Barang</router-link></li>
        <li><router-link to="/jual">Jual</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 220px;
    background-color: #2c3e50;
    color: white;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding-left: 0;
  }
  .sidebar li {
    margin: 15px 0;
  }
  .sidebar a {
    color: white;
    text-decoration: none;
  }
  .sidebar a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
  }
  </style>
  