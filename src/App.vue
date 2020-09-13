<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import {ACTIONS_TYPES} from "@/store/types";
import Menu from "@/components/Menu"
export default  {
  components: {
    Menu
  },
  mounted() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RANDOM_RECIPE)
  }
}
</script>
