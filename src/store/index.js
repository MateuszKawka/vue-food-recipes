import Vue from 'vue'
import Vuex from 'vuex'
import {MUTATIONS_TYPES, ACTIONS_TYPES} from "@/store/types";

const API_KEY = '1';
const BASIC_PATH = `https://www.themealdb.com/api/json/v1/${API_KEY}`;
const GET_RECIPE_PATH = `/lookup.php?i=`
const GET_RANDOM_PATH = `/random.php`
const SEARCH_RECIPE_BY_NAME_PATH = `/search.php?s=`
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipe: {},
        recipeSearchQuery: '',
        recipeSearchResults: []
    },
    mutations: {
        [MUTATIONS_TYPES.SET_RECIPE]: (state, recipe) => state.recipe = recipe,
        [MUTATIONS_TYPES.SET_RECIPE_SEARCH_QUERY]: (state, query) => state.recipeSearchQuery = query,
        [MUTATIONS_TYPES.SET_RECIPE_SEARCH_RESULTS]: (state, searchResults) => state.recipeSearchResults = searchResults
    },
    actions: {
        [ACTIONS_TYPES.GET_RECIPE]({commit}, ID) {
            fetch(`${BASIC_PATH}${GET_RECIPE_PATH}${ID}`).then(res => res.json()).then(data => commit(MUTATIONS_TYPES.SET_RECIPE, data))
        },
        [ACTIONS_TYPES.GET_RANDOM_RECIPE]({commit}) {
            fetch(`${BASIC_PATH}${GET_RANDOM_PATH}`).then(res => res.json()).then(data => commit(MUTATIONS_TYPES.SET_RECIPE, data.meals[0]))
        },
        [ACTIONS_TYPES.SEARCH_RECIPE_BY_NAME]({commit, state}) {
            console.log('trigger')
            fetch(`${BASIC_PATH}${SEARCH_RECIPE_BY_NAME_PATH}${state.recipeSearchQuery}`).then(res => res.json()).then(data => console.log(data))
        }
    },
    modules: {}
})
