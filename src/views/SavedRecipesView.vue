<template>
  <section class="section">
    <h2 class="is-size-5 my-5 has-text-centered has-text-weight-bold">
      Saved recipes
    </h2>
    <PreviewRecipe
      v-for="recipe in savedRecipes"
      :recipe="recipe"
      :key="recipe.strMeal"
    />
  </section>
</template>

<script>
import { ACTIONS_TYPES } from "@/store/types";
import PreviewRecipe from "@/components/PreviewRecipe";
export default {
  components: {
    PreviewRecipe,
  },
  computed: {
    savedRecipes() {
      return this.$store.state.recipesList;
    },
  },
  beforeMount() {
    this.$store.dispatch(ACTIONS_TYPES.GET_SAVED_RECIPES);
    this.$store.dispatch(ACTIONS_TYPES.GET_SAVED_RECIPES_DATA);
  },
};
</script>
