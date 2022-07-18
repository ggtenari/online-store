import React from 'react';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeFoodPage = () => {
  const { foods } = useRecipeApp();

  return (
    <div>
      PAGINA DO RecipeFoodPage
      {foods && <RecipeCard /> }
    </div>
  );
};

export default RecipeFoodPage;
