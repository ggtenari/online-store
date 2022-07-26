import React from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';

function ButtoonsFilterRecipes() {
  const { favoriteList, setFavoriteList } = useRecipeApp();

  const handleOnClick = ({ target: { name } }) => {
    if (name === 'all') {
      return setFavoriteList(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
    return setFavoriteList(favoriteList.filter((recipe) => recipe.type === name));
  };
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        name="all"
        type="button"
        onClick={ handleOnClick }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        name="food"
        type="button"
        onClick={ handleOnClick }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        name="drink"
        type="button"
        onClick={ handleOnClick }
      >
        Drinks
      </button>
    </div>
  );
}

export default ButtoonsFilterRecipes;
