import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { APP_PATH } from "./path";
Vue.use(VueRouter);

const routes = [
  {
    path: APP_PATH.BASE.PATH,
    name: APP_PATH.BASE.NAME,
    component: Home,
  },
  {
    path: APP_PATH.RECIPE.PATH,
    name: APP_PATH.RECIPE.NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FullRecipeView.vue"),
  },
  {
    path: APP_PATH.CATEGORY.PATH,
    name: APP_PATH.CATEGORY.NAME,
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ExploreByCategories.vue"
      ),
  },
  {
    path: APP_PATH.CATEGORIES.PATH,
    name: APP_PATH.CATEGORIES.NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CategoriesView.vue"),
  },
  {
    path: APP_PATH.SAVED_RECIPES.PATH,
    name: APP_PATH.SAVED_RECIPES.NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SavedRecipesView.vue"),
  },
  {
    path: APP_PATH.AREA.PATH,
    name: APP_PATH.AREA.NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExploreByArea.vue"),
  },
  {
    path: APP_PATH.AREAS.PATH,
    name: APP_PATH.AREAS.NAME,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AreasView.vue"),
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
