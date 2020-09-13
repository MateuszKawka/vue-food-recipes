<template>
  <form  class="form">
    <div class="field">
      <label class="label">Recipe name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="recipeSearchQuery" @input="searchRecipe">
      </div>
    </div>
  </form>
</template>

<script>
import {ACTIONS_TYPES, MUTATIONS_TYPES} from "@/store/types";
import debounce from "lodash.debounce"
export default {
  name: "SearchRecipe",
  computed: {
    recipeSearchQuery: {
      get() {
        return this.$store.state.recipeSearchQuery
      },
      set(newValue) {
        this.$store.commit(MUTATIONS_TYPES.SET_RECIPE_SEARCH_QUERY, newValue)
      }
    }
  },
  methods: {
    searchRecipe() {
      console.log('bump')
      debounce(function() {
        this.$store.dispatch(ACTIONS_TYPES.SEARCH_RECIPE_BY_NAME)
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>