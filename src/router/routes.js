const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/login",
    name: "LoginIn",
    component: () => import("app/src/pages/LoginSesion.vue"),
  },
  {
    path: "/createUser",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/home",
    meta: {
      requireLogin: true,
    },
    name: "IndexAdmin",
    component: () => import("app/src/pages/company/IndexAdmin.vue"),
    children: [
      {
        path: "projects",
        name: "Projects",
        component: () =>
          import("app/src/pages/company/projects/ProjectsCompany.vue"),
      },
      {
        path: "clients",
        name: "Clients",
        component: () =>
          import("app/src/pages/company/clients/ListClients.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
