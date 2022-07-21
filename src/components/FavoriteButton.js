import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton({ testid }) {
  const [isfavorite, setIsFavorite] = useState(false);
  const FAVORITE_RECIPES = 'favoriteRecipes';
  if (!JSON.parse(localStorage.getItem(FAVORITE_RECIPES))) {
    localStorage.setItem(FAVORITE_RECIPES, JSON.stringify([]));
  }
  const getFavoriteRecipes = () => JSON.parse(localStorage.getItem(FAVORITE_RECIPES));

  const setFavoriteRecipes = (favorite) => localStorage
    .setItem(FAVORITE_RECIPES, JSON.stringify(favorite));

  const copyToClipboard = () => {

  };
  return (
    <input
      data-testid={ testid }
      onClick={ copyToClipboard }
      type="image"
      src={ isfavorite ? blackHeartIcon : whiteHeartIcon }
      alt="Favotite icon"
    />
  );
}

// ShareButton.propTypes = {
//   url: PropTypes.string.isRequired,
//   testid: PropTypes.string.isRequired,
// };

export default FavoriteButton;
