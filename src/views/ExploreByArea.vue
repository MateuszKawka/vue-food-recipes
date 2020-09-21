<template>
    <section class="section">
        <h2 class="is-size-5 my-5 has-text-centered has-text-weight-bold">{{area}}</h2>
        <PreviewRecipe v-for="recipe in recipeList" :key="recipe.strMeal" :recipe="recipe"/>
    </section>
</template>

<script>
import PreviewRecipe from "@/components/PreviewRecipe"
import { ACTIONS_TYPES } from "@/store/types";
export default {
    name: "BrowseByArea",

    components: {
        PreviewRecipe
    },
    computed: {
        recipeList() {
            return this.$store.state.recipesList
        },
        area() {
            return this.$route.params.area
        }
    },
    beforeMount() {
        this.$store.dispatch(ACTIONS_TYPES.GET_RECIPES_BY_AREA, this.area )
    }
}
</script>