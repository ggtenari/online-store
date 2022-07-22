import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardFavoriteOrDone from '../components/CardFavoriteOrDone';
import { useRecipeApp } from '../context/RecipeAppProvider';
import ButtoonsFilterRecipes from '../components/ButtonsFilterRecipes';

function FavoriteRecipes() {
  const { favoriteList, setFavoriteList } = useRecipeApp();

  useEffect(() => {
    const getFavoriteRecipes = () => JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(getFavoriteRecipes());
    setFavoriteList(getFavoriteRecipes);
  }, []);
  return (
    <div>
      <Header title="Favorite Recipes" searchIconOnOff={ false } />
      <ButtoonsFilterRecipes />
      {favoriteList !== [] && favoriteList.map(
        (recipe, index) => (<CardFavoriteOrDone
          key={ recipe.id }
          index={ index }
          recipe={ recipe }
        />),
      )}

    </div>
  );
}
export default FavoriteRecipes;
