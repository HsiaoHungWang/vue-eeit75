<template>
        <h2>台北市景點</h2>
</template>
    
<script setup>
    import axios from 'axios'
import { onMounted } from 'vue';

    onMounted(async ()=>{
     // const response = await axios.get('http://localhost:8080/api/spot/categories')
     const response = await axios.get(`${import.meta.env.VITE_API_SPOTURL}/spot/categories`)
      console.log(response.data)
      console.log(import.meta.env.VITE_API_SPOTURL)
    })
</script>
    
<style scoped>
    
</style>