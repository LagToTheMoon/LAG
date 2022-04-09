import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../views/Home.vue";
import Knight from "../views/Knight.vue";
import Meme from "../views/Meme.vue";
import Contest from "../views/Contest.vue";

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
  {
    path: "/meme",
    name: "Meme",
    component: Meme,
  },
  {
    path: "/contest",
    name: "Contest",
    component: Contest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
