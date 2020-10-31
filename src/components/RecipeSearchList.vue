<template>
  <div class="recipe-search-list-container box py-5 mt-5">
    <button class="close-button" @click="clearRecipesList">
      <CloseCircleIcon />
    </button>
    <perfect-scrollbar>
      <ul class="recipe-search-list px-2">
        <li
          v-for="item in recipeSearchData"
          :key="item.idMeal"
          class="my-4 recipe-search-list__item is-rounded"
          @click="goToFullRecipe(item.idMeal)"
        >
          <img v-lazy="getImageThumb(item)" class="image is-128x128 mr-2" />
          <p class="pr-2 has-text-right">{{ item.strMeal }}</p>
        </li>
      </ul>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { ACTIONS_TYPES, MUTATIONS_TYPES } from "@/store/types";
import CloseCircleIcon from "vue-material-design-icons/CloseCircle";
export default {
  name: "SearchList",
  components: {
    CloseCircleIcon,
  },
  computed: {
    recipeSearchData() {
      return this.$store.state.recipesList;
    },
  },
  methods: {
    goToFullRecipe(mealID) {
      //this.$store.dispatch(ACTIONS_TYPES.GET_RECIPE, mealID);
      this.$router.push(`/recipe/${mealID}`);
    },
    getImageThumb(meal) {
      return `${meal.strMealThumb}/preview`;
    },
    clearRecipesList() {
      this.$store.commit(MUTATIONS_TYPES.CLEAR_RECIPES_LIST);
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-search-list-container {
  width: 80%;
  position: relative;
}

.recipe-search-list__item {
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ps {
  height: 400px;
}

.close-button {
  border: none;
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 99;
  cursor: pointer;
}

.close-button span {
  color: $details-color;
}

@media (min-width: $medium-breakpoint) {
  .recipe-search-list-container {
    width: 50%;
  }
}
</style>
