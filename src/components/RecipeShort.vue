<template>
  <div @click="clicked">
    <h2 class="title ">{{ recipe.strMeal }}</h2>
    <h4 class="subtitle">{{ recipe.strCategory }}</h4>
    <img :src="recipe.strMealThumb"/>
  </div>


</template>

<script>
export default {
  name: "RecipeFull",
  computed: {
    recipe() {
      return this.$store.state.recipe
    }
  },
  methods: {
    clicked() {
      this.$emit('click:emit', this.recipe.idMeal)
    }
  }
}
</script>

<style scoped>

</style>