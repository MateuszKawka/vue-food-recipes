<template>
  <section class="section">
    <AreasPicker />
  </section>
</template>

<script>
import AreasPicker from "@/components/AreasPicker";
import {ACTIONS_TYPES} from "@/store/types"
export default {
name: "AreasView",
  components: {
    AreasPicker
  },
  mounted() {
       this.$store.dispatch(ACTIONS_TYPES.GET_AREAS);
  }
}
</script>

<style scoped>

</style>