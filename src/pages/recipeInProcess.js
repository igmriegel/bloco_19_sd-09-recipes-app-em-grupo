import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import getFoodsAndDrinks from '../services/servicesAPI';
import DetailHeader from '../components/detailHeader';
import MealVideo from '../components/MealVideo';
import CarouselContainer from '../components/recContainer';
// import IngredientsList from '../components/ingredientList';
import IngredientCheckbox from '../components/ingredientCheckbox';

export default function RecipeInProcess() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isFood = (pathname.split('/')[1] === 'comidas');
  const recPath = isFood ? '/bebidas' : '/comidas';
  const [recipe, setRecipe] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    async function getRecipe() {
      const recipeType = isFood ? 'meals' : 'drinks';
      const recomType = isFood ? 'drinks' : 'meals';
      setRecipe(await getFoodsAndDrinks(recipeType, 'getById', id));
      setRecomendations(await getFoodsAndDrinks(recomType, 'getAll'));
    }
    getRecipe();
  }, [isFood, id]);
  const limit = 6;
  return (
    recipe.length > 0
    && (
      <div>
        <DetailHeader recipe={ recipe[0] } isFood={ isFood } />
        <IngredientCheckbox recipe={ recipe[0] } />
        <p data-testid="instructions">{recipe[0].strInstructions}</p>
        {isFood && <MealVideo
          code={ recipe[0].strYoutube.split('=')[1] }
          title={ recipe[0].strMeal }
        /> }
        <CarouselContainer
          recipes={ recomendations.slice(0, limit) }
          path={ recPath }
        />
      </div>));
}
