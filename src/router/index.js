import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import search from '../pages/search.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home_2",
    name: "Home_2",
    component: () => import("../views/Home_2.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/programme",
    name: "Programme",
    component: () => import("../views/Programme.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/more",
    name: "More",
    component: () => import("../components/more.vue"),
  },
  {
    path: "/hello",
    name: "heloo",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: search
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
