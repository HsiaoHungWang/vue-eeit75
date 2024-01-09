<script setup>
   import 'bootstrap/dist/css/bootstrap.min.css'
   import 'bootstrap/dist/js/bootstrap.min.js'
   import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
 <Navbar></Navbar>
  <RouterView></RouterView>
  </div>
 
 
  
</template>

<style scoped>

</style>
