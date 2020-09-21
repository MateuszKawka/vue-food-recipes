<template>
  <div @click="goToFullRecipe" class="short-recipe-container">
    <div class="short-recipe">
        <img v-lazy="recipe.strMealThumb" class="short-recipe__image"/>

        <div class="short-recipe__content">
      <p class="title is-4 mt-1 has-text-white">{{ recipe.strMeal }}</p>
      <h4 class="has-text-white">{{ recipe.strCategory }}</h4>
      <Tags :recipe="recipe" class="mt-5"/>
    </div>
    </div>

  </div>


</template>

<script>
import Tags from "@/components/Tags";
export default {
  name: "PreviewRecipe",
  components: {
    Tags
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToFullRecipe() {
      this.$router.push(`/recipe/${this.recipe.idMeal}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.short-recipe {
  position: relative;
  cursor: pointer;
  transform: scale(0.95);
  transition: .25s all ease-in-out;
  display: flex;
}

.short-recipe:hover {
  transform: scale(1);
}

.short-recipe__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  background: $dark-overlay-background;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  
}
</style>