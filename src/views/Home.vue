<template>
  <section class="section">
  <SearchRecipe/>
    <p>Random recipe</p>
    <RecipeShort @click:emit="goToFullRecipe"/>
  </section>
</template>

<script>
import SearchRecipe from "@/components/SearchRecipe";
import RecipeShort from "@/components/RecipeShort";
import {ACTIONS_TYPES} from "@/store/types";

export default {
  name: 'Home',
  components: {
    SearchRecipe,
    RecipeShort
  },
  methods: {
    goToFullRecipe(mealID) {
    this.$store.dispatch(ACTIONS_TYPES.GET_RECIPE, mealID);
    console.log('clicked')
    this.$router.push('/recipe')
    }
  },
  mounted() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RANDOM_RECIPE)
  }
}
</script>
