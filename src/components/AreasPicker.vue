<template>
  <section class="section">
    <ul>
      <li
        class="dropdown-item "
        v-for="area in listOfAreas"
        :key="area.strArea"
      >
        <button class="button is-fullwidth is-outlined my-2" @click="goToArea(area.strArea)">
          {{ area.strArea }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    listOfAreas() {
      return this.$store.state.listOfAreas;
    },
  },
  methods: {
    bindDropdown() {
      this.openDropdown = !this.openDropdown;
    },
    goToArea(area) {
      this.$router.push(`/area/${area}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  cursor: pointer;
}

.dropdown-item:hover {
  color: $details-color;
}
</style>
