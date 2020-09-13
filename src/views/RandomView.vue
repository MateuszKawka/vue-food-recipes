<template>
<div class="container">
  <button @click="reroll">Reroll</button>
  <RecipeFull/>
</div>
</template>

<script>
import RecipeFull from "@/components/RecipeFull";
import {ACTIONS_TYPES} from "@/store/types";

export default {
name: "RandomView",
  components: {
    RecipeFull
  },
  methods: {
  reroll(){
    this.$store.dispatch(ACTIONS_TYPES.GET_RANDOM_RECIPE)
  }
  }
}
</script>

<style scoped>

</style>