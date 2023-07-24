import SignUp from "./components/SignUp.vue";
import HomePage from "./components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/Login.vue";
import AddSection from "./components/Add.vue";
import UpdateSection from "./components/Update.vue";

const routes = [
  {
    name: "SignUp",
    component: SignUp,
    path: "/",
  },
  {
    name: "HomePage",
    component: HomePage,
    path: "/home",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "AddSection",
    component: AddSection,
    path: "/add",
  },
  {
    name: "UpdateSection",
    component: UpdateSection,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
