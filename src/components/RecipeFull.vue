<template>
  <section class="">
    <img :src="recipe.strMealThumb" class="image is-rounded recipe__image"/>
      <h2 class="title has-text-centered has-text-primary mt-5">{{ recipe.strMeal }}</h2>
      <h4 class="subtitle has-text-centered mt-5 has-text-primary">{{ recipe.strCategory }}</h4>
      <h5 class="is-size-6 has-text-centered">{{recipe.strArea}}</h5>
    <div class="container px-5 pt-2">
      <table class="table is-narrow is-hoverable is-fullwidth mt-6 ingredients-table" ref="ingredients-table">
        <thead>
        <th class="has-text-primary">ingredients</th>
        <th class="has-text-primary">measures</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in ingredients" :key="`${item}__${index}`">
          <td>{{ item }}</td>
          <td>{{ measures[index] }}</td>
        </tr>
        </tbody>
      </table>
      <p class="has-text-right"><a @click="exportIndgredients" class="has-text-primary is-size-6">Export as shopping list <ImportIcon /></a></p>
      <h3 class="my-6">{{ recipe.strInstructions }}</h3>
    </div>
    <!--    <div v-for="tag in tags" class="tag is-light ml-2">{{ tag }}</div>-->
  </section>


</template>

<script>
import ImportIcon from 'vue-material-design-icons/Import';
export default {
  name: "RecipeFull",
  components: {
    ImportIcon
  },
  computed: {
    recipe() {
      return this.$store.state.recipe
    },
    ingredients() {
      return Object.keys(this.recipe).filter((key) => /Ingredient/.test(key)).map(key => this.recipe[key]).filter(Boolean)
    },
    measures() {
      return Object.keys(this.recipe).filter((key) => /Measure/.test(key)).map(key => this.recipe[key])
    }
    // tags() {
    //   return this.recipe.strTags.split(',')
    // }
  },
  methods: {
    exportIndgredients({target}) {
      const table = document.querySelector('.ingredients-table')

      const html = table.outerHTML;
      const url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url
      target.setAttribute("href", url);
      target.setAttribute("download", "export.xls"); // Choose the file name
      return false;
    }
  }
}
</script>

<style scoped>
.recipe__image {
  filter: sepia(14%) saturate(131%) contrast(105%);
}
</style>