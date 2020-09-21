<template>
  <div class="tags is-rounded is-small" v-if="tags !== null">
    <span class="tag is-primary" v-for="(tag, index) in tags" :key="`${tag}__${index}`">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    tags() {
       return this.recipe.strTags && this.recipe.strTags !== null ? this.recipe.strTags.split(',') : null
    }
  },
}
</script>

<style scoped>

</style>