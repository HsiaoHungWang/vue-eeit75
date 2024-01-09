import HomeVue from "./views/Home.vue"
import AboutVue from "./views/About.vue"
import ContactVue from "./views/Contact.vue"
import SpotsVue from './views/Spots.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {path:"/",component:HomeVue}, //http://localhost:8080/  => Home Component   
    {path:"/about",component:AboutVue},
    {path:"/contact",component:ContactVue},
    {path:"/spots",component:SpotsVue},
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router
