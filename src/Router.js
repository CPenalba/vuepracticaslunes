import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent2 from "./components/CollatzComponent2.vue";
import TablaMultiplicar from './components/TablaMultiplicar.vue'

const myRoutes = [
  { path: "/", component: HomeComponent },
  { path: "/collatz", component: CollatzComponent2 },
  { path: "/tablamultiplicar", component: TablaMultiplicar },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
