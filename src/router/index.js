import { createRouter as t, createWebHistory as o } from "vue-router";
let routes = [
    {
      path: "/",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: () => import("../pages/Home.vue"),
        },
        {
          path: "clients",
          name: "Clients",
          component: () => import("../pages/Clients.vue"),
        },
        {
          path: "question",
          name: "Question",
          component: () => import("../pages/Question.vue"),
        },
        {
          path: "reports",
          name: "Reports",
          component: () => import("../pages/Reports.vue"),
        },

        {
          path: "settings",
          name: "Settings",
          component: () => import("../pages/Settings.vue"),
        },
        {
          path: ":catchAll(.*)",
          name: "NotFound",
          component: () => import("../pages/Error404.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFoundRoot",
      component: () => import("../pages/Error404.vue"),
    },
  ],
  router = t({ history: o(), routes });
export default router;
