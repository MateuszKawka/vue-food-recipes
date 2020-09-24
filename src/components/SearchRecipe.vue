<template>
    <div class="field">
      <div class="control is-expanded" :class="{ 'is-loading': isLoading }">
        <input
          class="input is-fullwidth is-secondary"
          type="text"
          placeholder="Recipe name"
          v-model="recipeSearchQuery"
          @input="searchRecipe"
        />
      </div>
    </div>
</template>

<script>
import { ACTIONS_TYPES, MUTATIONS_TYPES } from "@/store/types";
import _ from "lodash";

export default {
  name: "SearchRecipe",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    recipeSearchQuery: {
      get() {
        return this.$store.state.recipeSearchQuery;
      },
      set(newValue) {
        this.$store.commit(MUTATIONS_TYPES.SET_RECIPE_SEARCH_QUERY, newValue);
      },
    },
  },
  methods: {
    searchRecipe: _.debounce(async function() {
      if (this.recipeSearchQuery.length > 1) {
        this.isLoading = true;
        await this.$store.dispatch(ACTIONS_TYPES.SEARCH_RECIPE_BY_NAME);
        this.isLoading = false;
      } else {
        this.$store.commit(MUTATIONS_TYPES.CLEAR_RECIPE_LIST);
      }
    }, 500),
    showSearchList(e) {
      console.log("blur", e.target);
    },
    hideSearchList() {

    }
  },
};
</script>

<style scoped></style>
