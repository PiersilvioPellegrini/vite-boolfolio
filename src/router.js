import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ContactsPage from "./pages/Contacts.vue";
import AboutPage from "./pages/AboutUs.vue";
import ProjectsIndexPage from "./pages/projects/Index.vue";
import ProjectsShowPage from "./pages/projects/Show.vue";

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/chi-siamo",
      name: "aboutUs",
      component: AboutPage,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: ContactsPage,
    },
    {
      // lista di tutti i post
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndexPage,
    },
    {
      // Show di un singolo post
      path: "/projects/:id",
      name: "projects.show",
      component: ProjectsShowPage,
    },
  ],
});

export { router };
