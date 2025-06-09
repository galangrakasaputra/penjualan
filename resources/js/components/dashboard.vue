<template>
    <div class="dashboard">
      <div class="main-content">
        <h1>Dashboard</h1>
        <Content />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './sidebar.vue';
  import Content from './content.vue';
  
  export default {
    components: {
      Sidebar,
      Content
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    min-height: 100vh;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
  }
  </style>
  