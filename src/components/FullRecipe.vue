<template>
  <div class="full-recipe">
    <div class="background">
      <div class="container">
        <div class="header">
          <div
              :style="
              `background: url(${recipe.strMealThumb}) center no-repeat;background-size: cover`
            "
              class="recipe__image"
          ></div>
          <div class="header__content">
            <h2 class="title has-text-centered has-text-white mt-5">
              {{ recipe.strMeal }}
            </h2>
            <h4 class="subtitle has-text-centered mt-5 has-text-white">
              {{ recipe.strCategory }}
            </h4>
            <h5 class="is-size-6 has-text-centered has-text-white">
              {{ recipe.strArea }}
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 mt-5">
      <transition
          name="fade"
          mode="out-in"
      >
        <a
            @click="bindIngredientsList"
            class="ingredients-switcher is-vcentered has-text-right has-text-primary"
        >
          <ViewGridIcon v-if="ingredientsList" class="mr-2"/>
          <FormatListBulletedIcon class="mr-2" v-else/>
          {{ ingredientsList ? "Display as carousel" : "Display as list" }}</a
        ></transition>
    </div>

    <!-- <Carousel infinite :perPage="3" v-if="!ingredientsList" :paginationEnabled="false" class="ingredients px-3 mt-5">
        <slide v-for="(item, index) in ingredients" :key="`${item}__${index}`">
          <div class="recipe-item">
            <img
              :src="
                `https://www.themealdb.com/images/ingredients/${item}-Small.png`
              "
            />
            <p
              class="is-size-6 has-text-weight-medium has-text-centered has-text-weight-semibold has-text-primary"
            >
              {{ item }}
            </p>
            <p class="has-text-weight-normal has-text-centered ">
              {{ measures[index] }}
            </p>
          </div>
        </slide>
      </Carousel> -->
    <div class="container">
      <swiper class="swiper mt-5" :options="swiperOption" v-if="!ingredientsList">
        <swiper-slide
            v-for="(item, index) in ingredients"
            :key="`${item}__${index}`"
        >
          <div class="recipe-item">
            <img
                :src="
              `https://www.themealdb.com/images/ingredients/${item}-Small.png`
            "
            />
            <p
                class="is-size-6 has-text-weight-medium has-text-centered has-text-weight-semibold has-text-primary"
            >
              {{ item }}
            </p>
            <p class="has-text-weight-normal has-text-centered ">
              {{ measures[index] }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <ul class="ingredients ingredients--list px-3 mt-5" v-else>
        <li v-for="(item, index) in ingredients" :key="`${item}__${index}`">
          <div class="recipe-item recipe-item--list">
            <img
                :src="
              `https://www.themealdb.com/images/ingredients/${item}-Small.png`
            "
            />
            <p>{{ item }}</p>
            <p>{{ measures[index] }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="container px-5 py-5">
      <a
          class="has-text-right export-recipe has-text-primary"
          @click="exportIndgredients"
      >Export as shopping list
        <ImportIcon/>
      </a>
      <p class="my-6">{{ recipe.strInstructions }}</p>
    </div>
  </div>
</template>

<script>
import ImportIcon from "vue-material-design-icons/Import";
import ViewGridIcon from "vue-material-design-icons/ViewGrid";
import FormatListBulletedIcon from "vue-material-design-icons/FormatListBulleted";
import {ACTIONS_TYPES} from "@/store/types";
import {Carousel, Slide} from "vue-carousel";
import jsPDF from 'jspdf'
import JsPDFAutotable from "jspdf-autotable";

export default {
  name: "RecipeFull",
  data() {
    return {
      ingredientsList: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 48,
        freeMode: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          600: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 6,
          }
        }
      },
    };
  },
  components: {
    ImportIcon,
    Carousel,
    Slide,
    FormatListBulletedIcon,
    ViewGridIcon,
    JsPDFAutotable,
  },
  computed: {
    recipe() {
      return this.$store.state.recipe;
    },
    mealID() {
      return this.$route.params.id;
    },
    ingredients() {
      return Object.keys(this.recipe)
          .filter((key) => /Ingredient/.test(key))
          .map((key) => this.recipe[key])
          .filter(Boolean);
    },
    measures() {
      return Object.keys(this.recipe)
          .filter((key) => /Measure/.test(key))
          .map((key) => this.recipe[key]);
    },
  },
  methods: {
    exportIndgredients() {
      var doc = new jsPDF();
      doc.setFontSize(22);
      doc.setTextColor('#FC440F');
      doc.text(20, 10, `${this.recipe.strMeal}`)
      doc.setTextColor('#000');
      doc.setFontSize(16);
      this.ingredients.forEach((ingredient, i) => {
        doc.text(
            20,
            30 + i * 10,
            `${i + 1}  ${this.measures[i]} ${ingredient}`
        );
      });
      doc.save(`${this.recipe.strMeal}_shopping_list.pdf`);
    },
    bindIngredientsList() {
      this.ingredientsList = !this.ingredientsList;
    }
  },
  beforeMount() {
    this.$store.dispatch(ACTIONS_TYPES.GET_RECIPE, this.mealID);
  },
};
</script>

<style lang="scss" scoped>


.full-recipe {
  // &:before {
  //   content: "";
  //   display: flex;
  //   width: 100%;
  //   height: 50vh;
  //   background: #FF0022;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 0;
  // }
}

.recipe__image {
  width: 100%;
  height: 40vh;
  margin: 0 auto;
}

.export-recipe {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.recipe-item {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.recipe-item--list {
  display: flex;
}

.ingredients {
}

.ingredients--list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.header {
  position: relative;
}

.header__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.ingredients-switcher {
  display: flex;
  justify-content: flex-end;
}
</style>
