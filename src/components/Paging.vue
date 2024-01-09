<template>
     <nav aria-label="Page navigation example">
  <ul class="pagination">
    
    <li class="page-item"  v-for="(value, index) in totalPages" :key="index" @click="clickHandler(value)">
        <a :class="{ 'currentPage': thePage === value, 'page-link': true }">{{value}}</a></li>
  
   
  </ul>
</nav>   
</template>
    
<script setup>
    const props = defineProps({
    totalPages: Number,
    thePage: Number
})
const emit = defineEmits(["xyzClick"])
const clickHandler = page => {
    emit("xyzClick", page)
}


</script>
    
<style scoped>
     .pagination li {
    cursor: pointer;
}
.currentPage {
    background-color: lightblue;
}

</style>