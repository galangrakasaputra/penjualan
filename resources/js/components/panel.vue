<template>
    <div class="panel">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Panel',
    props: {
      title: String,
      value: String
    }
  }
  </script>
  
  <style scoped>
  .panel {
    background: #ecf0f1;
    padding: 20px;
    flex: 1;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
  </style>
  