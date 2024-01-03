import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("./components/Add.vue"),
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./components/Update.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
