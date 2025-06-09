<template>
    <div class="app-container">
      <Sidebar />
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './sidebar.vue';
  
  export default {
    components: { Sidebar }
  }
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    min-height: 100vh;
  }
  
  .content-area {
    flex: 1;
    padding: 20px;
  }
  </style>
  