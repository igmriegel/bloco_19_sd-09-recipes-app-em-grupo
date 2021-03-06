import {
  GET_MEALS,
  GET_CATEGORIES_MEALS,
  GET_DRINKS,
  GET_CATEGORIES_DRINKS,
  GET_RANDOM_RECIPE,
  GET_INGREDIENTS,
  GET_SELECTED_INGREDIENT,
  GET_FILTER_AREA,
} from '../actions';

const INITIAL_STATE = {
  meals: [],
  categoriesMeals: [],
  drinks: [],
  categoriesDrinks: [],
  randomRecipe: { idMeal: '', idDrinks: '' },
  ingredients: [],
  selectedIngredient: '',
  filterByArea: [],
};

export default function recipesReducer(state = INITIAL_STATE, actions) {
  switch (actions.type) {
  case GET_MEALS:
    return {
      ...state,
      meals: [...actions.meals],
    };
  case GET_CATEGORIES_MEALS:
    return {
      ...state,
      categoriesMeals: [...actions.categories],
    };
  case GET_DRINKS:
    return {
      ...state,
      drinks: [...actions.drinks],
    };
  case GET_CATEGORIES_DRINKS:
    return {
      ...state,
      categoriesDrinks: [...actions.categories],
    };
  case GET_INGREDIENTS:
    return {
      ...state,
      ingredients: [...actions.ingredients],
    };
  case GET_RANDOM_RECIPE:
    return {
      ...state,
      randomRecipe: { ...actions.randomRecipe },
    };
  case GET_SELECTED_INGREDIENT:
    return {
      ...state,
      selectedIngredient: actions.selectedIngredient,
    };
  case GET_FILTER_AREA:
    return {
      ...state,
      filterByArea: actions.filterByArea,
    };
  default:
    return {
      ...state,
    };
  }
}
