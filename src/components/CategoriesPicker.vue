<template>
  <section class="categories py-5">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="category in categories" :key="category.strCategory"
        ><button
          class="button is-primary  is-small has-text-centered px-1 py-1 category-button"
          @click="exploreCategory(category.strCategory)"
        >
          {{ category.strCategory }}
        </button></swiper-slide
      >
    </swiper>
  </section>
</template>

<script>
import { ACTIONS_TYPES } from "@/store/types";
import { APP_PATH } from "@/router/path";
export default {
  data() {
    return {
      APP_PATH,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 48,
        freeMode: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    categories() {
      return this.$store.state.recipesCategories;
    },
  },
  methods: {
    exploreCategory(category) {
      this.$router.push(`/categories/${category}`);
    },
  },
  mounted() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RECIPES_CATEGORIES);
  },
};
</script>

<style scoped>
.categories {
  width: 100%;
}

.category-button {
  min-width: 64px;
  height: auto;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
