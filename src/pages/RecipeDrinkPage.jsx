import React from 'react';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeDrinkPage = () => {
  const { drinks } = useRecipeApp;

  return (
    <div>
      PAGINA DO RecipeDrinkPage
      {console.log(drinks)}
    </div>
  );
};

export default RecipeDrinkPage;
