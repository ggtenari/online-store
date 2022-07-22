import React from 'react';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';
import FavoriteButton from '../components/FavoriteButton';

const RecipeFoodPage = () => {
  const { foods } = useRecipeApp();

  return (
    <div>

      {foods && <h1>PAGINA DO RecipeFoodPage</h1> }
      <FavoriteButton testid="" objRecipe={ foods[0] } typeRecipes="food" />
    </div>
  );
};

export default RecipeFoodPage;
