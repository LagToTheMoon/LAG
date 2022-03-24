import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../views/Home.vue";
import Knight from "../views/Knight.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/knight",
    name: "Knight",
    component: Knight,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
