import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

function CardFavoriteOrDone({ recipe, index }) {
  const { id, type, nationality, category, alcoholicOrNot, name, image } = recipe;
  const styleImg = {
    width: '65px',
    heigth: '65px',
  };
  const styleText = {
    margin: '2px',
  };
  if (type === 'food') {
    return (
      <div>
        <a href={ `/foods/${id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            style={ styleImg }
            src={ image }
            alt="recipe"
          />
          <span data-testid={ `${index}-horizontal-name` }>{name}</span>
        </a>

        <span
          style={ styleText }
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nationality} - ${category}`}
        </span>
        <ShareButton testid={ `${index}-horizontal-share-btn` } url={ `http://localhost:3000/foods/${id}` } />
        <FavoriteButton
          testid={ `${index}-horizontal-favorite-btn` }
          objRecipe={ recipe }
          typeRecipes="food"
        />
      </div>
    );
  }
  return (
    <div>
      <a href={ `/drinks/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          style={ styleImg }
          src={ image }
          alt="recipe"
        />
        <span data-testid={ `${index}-horizontal-name` }>{name}</span>
      </a>
      <span
        style={ styleText }
        data-testid={ `${index}-horizontal-top-text` }
      >
        {category}
      </span>
      <span
        data-testid={ `${index}-horizontal-top-text` }
        style={ styleText }
      >
        {alcoholicOrNot}
      </span>
      <ShareButton testid={ `${index}-horizontal-share-btn` } url={ `http://localhost:3000/foods/${id}` } />
      <FavoriteButton
        testid={ `${index}-horizontal-favorite-btn` }
        objRecipe={ recipe }
        typeRecipes="drink"
      />
    </div>
  );
}

CardFavoriteOrDone.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardFavoriteOrDone;
