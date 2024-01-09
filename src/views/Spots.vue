<template>
        <h2>台北市景點</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="{spotId,spotTitle,spotImage,spotDescription,address} in spots.list" :key="spotId">
    <div class="card">
      <img :src="spotImage" class="card-img-top" :alt="spotTitle">
      <div class="card-body">
        <h5 class="card-title">{{spotId}} {{spotTitle}}</h5>
        <p class="card-text">{{ spotDescription.length <= 100 ? spotDescription : spotDescription.substring(0,100) }}...</p>
      </div>
      <div class="card-footer">
                    <small class="text-body-secondary">{{ address }}</small>
                </div>

    </div>
  </div>
  
</div>
<Paging :totalPages="totalPages" :thePage="datas.start" @xyzClick="clickHandler"></Paging>
</template>
    
<script setup>
    import axios from 'axios'
import { onMounted,ref,reactive } from 'vue'
import Paging from '../components/Paging.vue'

const spots = reactive({})
const totalPages = ref(0)
const datas = ref({
    "categoryId":0,
    "keyword":"公園",   
    "start":1,
    "rows":9,
    "dir":false,
    "sort":"spotId"
})
const API_URL = import.meta.env.VITE_API_SPOTURL

const loadSpots = async()=>{
   const response = await axios.post(`${API_URL}/spot/spotimages`,datas.value)      
   Object.assign(spots,response.data)
  // console.log(spots)
  totalPages.value = +datas.value.rows === 0 ? 1 : Math.ceil(response.data.count / datas.value.rows)
  //console.log(totalPages.value)
}

//分頁
const clickHandler = page =>{
datas.value.start = page
loadSpots()
}
    onMounted(async ()=>{
        loadSpots()
     // const response = await axios.get('http://localhost:8080/api/spot/categories')
//      const response = await axios.get(`${import.meta.env.VITE_API_SPOTURL}/spot/categories`)
//       console.log(response.data)
//       console.log(import.meta.env.VITE_API_SPOTURL)
    })
</script>
    
<style scoped>
   
</style>