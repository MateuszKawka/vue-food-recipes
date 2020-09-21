<template>
  <section class="section px-5">
    <h1 class="is-size-5 my-5 has-text-centered has-text-weight-bold">
      Food recipes
    </h1>
    <SearchRecipe />
    <div class=" pt-5 is-flex">
      <router-link
        tag="a"
        class="button is-small is-primary is-outlined"
        :to="APP_PATH.CATEGORIES.PATH"
        >Categories details</router-link
      >
      <router-link
        tag="button"
        class="button is-primary  is-small is-outlined"
        :to="APP_PATH.SAVED_RECIPES.PATH"
        >Saved recipes</router-link
      >
    </div>
    <SearchList v-if="showSearchList" />
    <CategoriesPicker />
    <AreasPicker />
    <div class="my-5">
      <h2 class="is-size-5 my-5 has-text-centered has-text-weight-bold">Random recipe</h2>
      <PreviewRecipe :recipe="recipe" />
    </div>
  </section>
</template>

<script>
import SearchRecipe from "@/components/SearchRecipe";
import PreviewRecipe from "@/components/PreviewRecipe";
import SearchList from "@/components/RecipeSearchList";
import CategoriesPicker from "@/components/CategoriesPicker";
import AreasPicker from "@/components/AreasPicker"
import { ACTIONS_TYPES, MUTATIONS_TYPES } from "@/store/types";
import { APP_PATH } from "@/router/path";

export default {
  name: "Home",
  components: {
    SearchRecipe,
    PreviewRecipe,
    SearchList,
    CategoriesPicker,
    AreasPicker
  },
  data() {
    return {
      APP_PATH,
    };
  },
  computed: {
    showSearchList() {
      return (
        this.$store.state.recipesList &&
        this.$store.state.recipesList.length > 0
      );
    },
    recipe() {
      return this.$store.state.recipe;
    },
  },
  mounted() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RANDOM_RECIPE);
    this.$store.commit(MUTATIONS_TYPES.CLEAR_RECIPES_LIST);
    this.$store.dispatch(ACTIONS_TYPES.GET_AREAS)
  },
};
</script>

<style scoped>
.section {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.is-flex {
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
