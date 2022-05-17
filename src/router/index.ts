import { useAuthStore } from "@/stores/auth";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import LoginView from "../views/LoginView.vue";
import Registeriew from "../views/RegisterView.vue";
import DeskView from "../views/DeskView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "desk",
    meta: {
      requiresAuth: true,
    },
    component: DeskView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: Registeriew,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.authed) {
    return next("/login");
  }
  next();
});

export default router;
