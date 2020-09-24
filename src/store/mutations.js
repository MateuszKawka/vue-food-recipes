import { MUTATIONS_TYPES } from "@/store/types";

export default  {
  [MUTATIONS_TYPES.SET_RECIPE]: (state, recipe) => (state.recipe = recipe),
  [MUTATIONS_TYPES.SET_RECIPE_SEARCH_QUERY]: (state, query) =>
    (state.recipeSearchQuery = query),
  [MUTATIONS_TYPES.SET_RECIPES_LIST]: (state, searchResults) =>
    (state.recipesList = searchResults),
  [MUTATIONS_TYPES.SET_IS_LOADING]: (state, isLoading) =>
    (state.isLoading = isLoading),
  [MUTATIONS_TYPES.CLEAR_RECIPES_LIST]: (state) => (state.recipesList = []),
  [MUTATIONS_TYPES.CLEAR_RECIPE] : (state) => state.recipe = {},
  [MUTATIONS_TYPES.SET_RECIPES_CATEGORIES]: (state, categories) =>
    (state.recipesCategories = categories),
  [MUTATIONS_TYPES.SET_PICKED_CATEGORY]: (state, category) =>
    (state.pickedCategory = category),
  [MUTATIONS_TYPES.ADD_RECIPE]: (state, recipeID) =>
    state.savedRecipes.push(recipeID),
  [MUTATIONS_TYPES.REMOVE_RECIPE]: (state, recipeID) =>
    (state.savedRecipes = state.savedRecipes.filter(
      (item) => item !== recipeID
    )),
  [MUTATIONS_TYPES.SET_SAVED_RECIPES]: (state, recipes) =>
    (state.savedRecipes = recipes),
  [MUTATIONS_TYPES.SET_SHOW_RECIPES_SEARCH_LIST]: (state, payload) =>
    (state.showRecipesSearchList = payload),
    [MUTATIONS_TYPES.SET_AREAS] : (state, areas) => state.listOfAreas = areas
};
