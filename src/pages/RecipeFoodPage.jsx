import React from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeFoodPage = () => {
  const { foods } = useRecipeApp();

  return (
    <div>

      {foods && <h1>PAGINA DO RecipeFoodPage</h1> }

    </div>
  );
};

export default RecipeFoodPage;
