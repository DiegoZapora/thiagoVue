import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/computada",
        name: "Computada",
        component: () => import("../views/Computada.vue")
    },
    {
        path: "/servicos",
        name: "Serviços",
        component: () => import("../views/Servicos.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router