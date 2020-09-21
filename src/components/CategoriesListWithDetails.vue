<template>
  <div class="container px-4">
    <p class="is-size-5 my-5 has-text-centered has-text-weight-bold">Explore recipes by categories</p>
    <ul>
      <li
        v-for="category in categories"
        class="box my-3 px-2 has-text-centered"
        :key="category.strCategory"
      >
      <p class="my-5 is-size-4 has-text-centered has-text-weight-semibold">
          {{ category.strCategory }}
        </p>
        <img :src="category.strCategoryThumb" class="image"/>
        <p class="my-4 px-3">{{ category.strCategoryDescription }}</p>
        <button
          class="button is-center is-primary is-small is-outlined"
          @click="exploreCategory(category.strCategory)"
        >
          Explore
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ACTIONS_TYPES } from "@/store/types";
import ReadMore from "vue-read-more";
export default {
  name: "RecipeCategories",
  components: {
    ReadMore,
  },
  computed: {
    categories() {
      return this.$store.state.recipesCategories;
    },
  },
  data() {
    return {
      isActive: false,
      pickedCategory: "",
    };
  },
  methods: {
    bindModal() {
      this.isActive = !this.isActive;
    },
    exploreCategory(category) {
      this.$router.push(`/categories/${category}`);
    },
  },
  mounted() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RECIPES_CATEGORIES);
  },
};
</script>

<style scoped></style>
