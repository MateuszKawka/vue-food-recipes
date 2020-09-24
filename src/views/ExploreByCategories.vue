<template>
<div class="container px-5">
  <h2 class="is-size-5 my-5 has-text-centered has-text-weight-bold">{{category}}</h2>
  <div class="columns is-multiline">
    <div class="column is-12-mobile is-4-tablet is-offset-tablet" v-for="recipe in recipes" :key='recipe.strMeal'>
      <PreviewRecipe :recipe="recipe" />
    </div>
  </div>
</div>
</template>

<script>
import {ACTIONS_TYPES} from "@/store/types";
import PreviewRecipe from "@/components/PreviewRecipe";

export default {
  name: "ExploreByCategories",
  components: {
    PreviewRecipe
  },
  computed: {
    category() {
      return this.$route.params.category
    },
    recipes() {
      return this.$store.state.recipesList
    }
  },
  beforeMount() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RECIPES_BY_CATEGORY, this.category)
  }
}
</script>

<style scoped>

</style>