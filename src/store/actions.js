import { MUTATIONS_TYPES, ACTIONS_TYPES } from "./types";
import {GET_RECIPE_PATH, GET_RANDOM_PATH, GET_ALL_CATEGORIES_PATH, GET_RECIPES_BY_CATEGORY_PATH, GET_AREAS_LIST, GET_RECIPES_BY_AREA_PATH ,SEARCH_RECIPE_BY_NAME_PATH} from "./consts"
const updateSavedRecipesLocalStorage = (recipes) => {
    localStorage.setItem("saved_recipes", JSON.stringify(recipes));
  };

export default {
    [ACTIONS_TYPES.GET_RECIPE]({ commit }, ID) {
      commit(MUTATIONS_TYPES.SET_IS_LOADING, true);
      fetch(`${GET_RECIPE_PATH}${ID}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_RECIPE, data.meals[0]))
        .then(() => commit(MUTATIONS_TYPES.SET_IS_LOADING, false));
    },
    [ACTIONS_TYPES.GET_RANDOM_RECIPE]({ commit }) {
      commit(MUTATIONS_TYPES.SET_IS_LOADING, true);
      fetch(`${GET_RANDOM_PATH}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_RECIPE, data.meals[0]))
        .then(() => commit(MUTATIONS_TYPES.SET_IS_LOADING, false));
    },
    [ACTIONS_TYPES.SEARCH_RECIPE_BY_NAME]({ commit, state }) {
      fetch(`${SEARCH_RECIPE_BY_NAME_PATH}${state.recipeSearchQuery}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_RECIPES_LIST, data.meals));
    },
    [ACTIONS_TYPES.GET_RECIPES_CATEGORIES]({ commit }) {
      fetch(`${GET_ALL_CATEGORIES_PATH}`)
        .then((res) => res.json())
        .then((data) =>
          commit(MUTATIONS_TYPES.SET_RECIPES_CATEGORIES, data.categories)
        );
    },
    [ACTIONS_TYPES.GET_RECIPES_BY_CATEGORY]({ commit }, category) {
      fetch(`${GET_RECIPES_BY_CATEGORY_PATH}${category}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_RECIPES_LIST, data.meals));
    },
    [ACTIONS_TYPES.SAVE_OR_REMOVE_RECIPE]({ commit, state }, recipeID) {
      if(state.savedRecipes.includes(recipeID)) {
        commit(MUTATIONS_TYPES.REMOVE_RECIPE, recipeID)
        Vue.notify({
          group: "notification",
          text: "Recipe remove from bookmarks !!",
          type: "warn",
        });
      } else {
        commit(MUTATIONS_TYPES.ADD_RECIPE, recipeID);
        Vue.notify({
          group: "notification",
          text: "Recipe added to bookmarks !!",
          type: "warn",
        });
      }
      updateSavedRecipesLocalStorage(state.savedRecipes);
    },
    [ACTIONS_TYPES.GET_SAVED_RECIPES]({ commit, state }) {
      localStorage.getItem("saved_recipes")
        ? commit(
            MUTATIONS_TYPES.SET_SAVED_RECIPES,
            JSON.parse(localStorage.getItem("saved_recipes"))
          )
        : commit(MUTATIONS_TYPES.SET_SAVED_RECIPES, []);
    },
    async [ACTIONS_TYPES.GET_SAVED_RECIPES_DATA]({ commit, state }) {
      const arrayOfSavedRecipes = [];
      await Promise.all(
        state.savedRecipes.map((recipeID, index) => {
          return fetch(`${GET_RECIPE_PATH}${recipeID}`)
            .then((response) => response.json())
            .then((data) => {
              arrayOfSavedRecipes[index] = { ...data.meals[0] };
            });
        })
      );
      commit(MUTATIONS_TYPES.SET_RECIPES_LIST, arrayOfSavedRecipes);
    },
    [ACTIONS_TYPES.GET_AREAS]({ commit, state }) {
        fetch(`${GET_AREAS_LIST}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_AREAS, data.meals));
      },
      [ACTIONS_TYPES.GET_RECIPES_BY_AREA]({commit, state}, area) {
        fetch(`${GET_RECIPES_BY_AREA_PATH}${area}`)
        .then((res) => res.json())
        .then((data) => commit(MUTATIONS_TYPES.SET_RECIPES_LIST, data.meals));
      }
}