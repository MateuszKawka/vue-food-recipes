<template>
  <div class="dropdown" :class="{ 'is-active': openDropdown }">
    <div class="dropdown-trigger">
      <button
        class="button is-small is-primary is-outlined"
        aria-haspopup="true"
        aria-controls="dropdown-menu3"
        @click="bindDropdown"
      >
        <span>Browse by area</span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <ul class="dropdown-content">
        <li
          class="dropdown-item"
          v-for="area in listOfAreas"
          :key="area.strArea"
          @click="goToArea(area.strArea)"
        >
          {{ area.strArea }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    openDropdown: false,
  }),
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
