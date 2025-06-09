<template>
    <div>
      <div class="panels">
        <Panel title="Penjualan" value="RP.120000" />
        <Panel title="Barang Terjual" value="100" />
        <Panel title="Pembeli" value="100" />
      </div>
    </div>
  </template>
  
  <script>
  import Panel from './panel.vue';
  
  export default {
    components: { Panel }
  }
  </script>
  
  <style scoped>
  .panels {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  </style>
  