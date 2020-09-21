<template>
  <nav class="navbar is-fixed-bottom">
    <div class="navbar-menu  navbar-menu--custom">
      <div class="navbar-item">
        <router-link
          to="/"
          class="navbar-item__link"
          :class="{ 'navbar-item__link--inactive': !isPossibleToBack }"
        >
          <BackIcon />
        </router-link>
      </div>
      <div class="navbar-item">
        <i
          class="navbar-item__link"
          @click="bookmark"
          :class="{ 'navbar-item__link--inactive': !isRecipeSaved }"
        >
          <HeartIcon />
        </i>
      </div>
      <div class="navbar-item">
        <router-link to="/" class="navbar-item__link">
          <GithubIcon />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import HeartIcon from "vue-material-design-icons/Heart";
import BackIcon from "vue-material-design-icons/Backspace";
import GithubIcon from "vue-material-design-icons/Github";
import { ACTIONS_TYPES, MUTATIONS_TYPES } from "@/store/types";
export default {
  name: "Menu",
  components: {
    HeartIcon,
    BackIcon,
    GithubIcon,
  },
  computed: {
    isPossibleToBack() {
      return this.$route.path !== "/";
    },

    recipeID() {
      return this.$route.params.id;
    },
    isRecipeSaved() {
      return this.$route.params.id
        ? this.$store.state.savedRecipes.includes(this.recipeID)
        : false;
    },
  },
  methods: {
    back() {
      if (this.isPossibleToBack) {
        this.$router.go(-1);
      }
    },
    bookmark() {
      if (this.$route.params.id) {
        this.$store.dispatch(
          ACTIONS_TYPES.SAVE_OR_REMOVE_RECIPE,
          this.recipeID
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-menu--custom {
  display: flex;
  justify-content: space-around;
}

.navbar-item__link {
  color: $details-color;
  cursor: pointer;
}

.navbar-item__link--inactive {
  color: $inactive-color;
}
</style>
