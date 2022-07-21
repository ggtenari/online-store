import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton({ testid, objRecipe, typeRecipes }) {
  const [isfavorite, setIsFavorite] = useState(false);

  let infoRecipe;

  if (typeRecipes === 'foods') {
    infoRecipe = {
      id: objRecipe.idMeal,
      type: 'foods',
      nationality: objRecipe.strArea,
      category: objRecipe.strCategory,
      alcoholicOrNot: '',
      name: objRecipe.strMeal,
      image: objRecipe.strMealThumb };
  } else {
    infoRecipe = {
      id: objRecipe.idDrink,
      type: 'drinks',
      nationality: '',
      category: objRecipe.strCategory,
      alcoholicOrNot: objRecipe.strAlcoholic,
      name: objRecipe.strDrink,
      image: objRecipe.strDrinkThumb };
  }

  const FAVORITE_RECIPES = 'favoriteRecipes';
  const getFavoriteRecipes = () => JSON.parse(localStorage.getItem(FAVORITE_RECIPES));

  const setFavoriteRecipes = (favorite) => localStorage.setItem(
    FAVORITE_RECIPES, JSON.stringify(favorite),
  );

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(FAVORITE_RECIPES))) {
      setFavoriteRecipes([]);
    }
    const listFavorites = getFavoriteRecipes();

    const isfavoriteRecipes = listFavorites.filter(
      (recipe) => recipe.id === infoRecipe.id,
    );

    if (isfavoriteRecipes[0]) {
      setIsFavorite(true);
    }
  }, []);

  const handleOnClick = () => {
    const listFavorites = getFavoriteRecipes();
    if (isfavorite) {
      setFavoriteRecipes(listFavorites.filter(
        (recipe) => recipe.id !== infoRecipe.id,
      ));
      setIsFavorite(false);
    } else {
      setFavoriteRecipes([...listFavorites, infoRecipe]);
      setIsFavorite(true);
    }
  };

  const styleImg = {
    width: '20px',
    height: '20px',
  };

  return (
    <input
      style={ styleImg }
      data-testid={ testid }
      onClick={ handleOnClick }
      type="image"
      src={ isfavorite ? blackHeartIcon : whiteHeartIcon }
      alt="Favotite icon"
    />
  );
}

FavoriteButton.propTypes = {
  testid: PropTypes.string.isRequired,
  objRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
  typeRecipes: PropTypes.string.isRequired,
};

export default FavoriteButton;
