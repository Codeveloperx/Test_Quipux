// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Empresas from "../pages/Empresas/Empresas.vue";
import Articulos from "../pages/Articulos/Articulos.vue";
import Colaboradores from "../pages/Colaboradores/Colaboradores.vue";
import Home from "../pages/Home/Home.vue";
import Layout from "../layout/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: { title: "Home" },
      },
      {
        path: "empresas",
        name: "Empresas",
        component: Empresas,
        meta: { title: "Empresas" },
      },
      {
        path: "articulos",
        name: "Articulos",
        component: Articulos,
        meta: { title: "Articulos" },
      },
      {
        path: "colaboradores",
        name: "Colaboradores",
        component: Colaboradores,
        meta: { title: "Colaboradores" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
