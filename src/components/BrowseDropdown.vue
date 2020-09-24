<template>
  <div class="dropdown is-right" :class="{ 'is-active': openDropdown }">
    <div class="dropdown-trigger">
      <button
        class="button is-primary is-small is-outlined"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="bindDropdown"
      >
        <span>Browse</span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content px-4">
        <router-link
          tag="a"
          class="dropdown-item has-text-primary is-size-7"
          :to="APP_PATH.AREAS.PATH"
          >By area</router-link
        >
        <hr class="dropdown-divider" />
        <router-link
          tag="a"
          class="dropdown-item has-text-primary is-size-7"
          :to="APP_PATH.CATEGORIES.PATH"
          >Categories details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { APP_PATH } from "@/router/path";

export default {
  name: "BrowseDropdown",
  data: () => ({
    APP_PATH,
    openDropdown: false,
  }),
  methods: {
    bindDropdown() {
      this.openDropdown = !this.openDropdown;
    },
  },
};
</script>
