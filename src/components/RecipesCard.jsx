import React, { useEffect } from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchAPI from '../helpers/fetchAPI';

const RecipeCard = () => {
  const { foods, drinks } = useRecipeApp();

  return (
    <div>
      Card de Receita
      <div>Receita</div>
      {foods.map((food) => <div key={ food.strMeal }>{ food.strMeal }</div>)}
    </div>
  );
};

export default RecipeCard;
