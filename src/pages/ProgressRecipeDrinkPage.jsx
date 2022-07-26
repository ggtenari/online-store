import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchDetailsDrink from '../helpers/fetchDetailsDrink';
import { useRecipeApp } from '../context/RecipeAppProvider';

const ProgressRecipeDrinkPage = ({ match: { params: { id } } }) => {
  const { setDetails, details } = useRecipeApp();
  const [ingredients, setIngredients] = useState({ ingredients: '', measures: '' });
  const [finished, setFinished] = useState(false);

  const style = {
    width: '150px',
    heigth: '150px',
  };

  let receitasEmProgresso = [];

  if (localStorage.getItem('inProgressRecipes')) {
    receitasEmProgresso = JSON
      .parse(localStorage.getItem('inProgressRecipes'))
      .cocktails[id] ? JSON.parse(localStorage
        .getItem('inProgressRecipes')).cocktails[id]
      : [];
  }

  const [localStorageArray,
    setLocalStorageArray] = useState(receitasEmProgresso);

  useEffect(() => {
    if (ingredients.ingredients) {
      if (ingredients.ingredients.length === localStorageArray.length) {
        setFinished(true);
      } else {
        setFinished(false);
      }
    }
  }, [localStorageArray]);

  const setChecked = (value) => {
    if (localStorageArray.includes(value)) {
      const prevLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { cocktails: { [id]: [] } };
      setLocalStorageArray(localStorageArray
        .filter((ingredient) => ingredient !== value));
      prevLocalStorage.cocktails[id] = localStorageArray
        .filter((ingredient) => ingredient !== value);
      localStorage.setItem('inProgressRecipes', JSON.stringify(prevLocalStorage));
    } else {
      console.log(value);
      const prevLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      prevLocalStorage.cocktails[id] = [...localStorageArray, value];
      console.log(prevLocalStorage);
      setLocalStorageArray([...localStorageArray, value]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(prevLocalStorage));
    }
  };

  const checkChecked = (value) => (!!localStorageArray.includes(value));

  useEffect(() => {
    fetchDetailsDrink(id).then((response) => {
      const recipeDetails = response.drinks[0];
      setDetails(recipeDetails);
      const ingredientList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Ingredient') && value !== null)));
      const measureList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Measure') && value !== null)));
      setIngredients({ ingredients: ingredientList, measures: measureList });
    });
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: {}, cocktails: {} }));
    }
    if (!localStorage.getItem('doneRecipes')) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
  }, []);

  const finishRecipe = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete local.cocktails[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    doneRecipes.push(id);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  };

  return (
    <div>
      {
        details
            && (
              <div>
                <div key={ details.strDrink }>
                  <img
                    data-testid="recipe-photo"
                    src={ details.strDrinkThumb }
                    alt={ `imagem da receita ${details.strDrink}` }
                    style={ style }
                  />
                  <h3 data-testid="recipe-title">{details.strDrink}</h3>
                  <h3 data-testid="recipe-category">{details.strAlcoholic }</h3>
                </div>
                { ingredients.ingredients
                && (
                  <div>
                    {ingredients.ingredients.map((ingredient, index) => {
                      if (ingredient !== '') {
                        return (
                          <div key={ index }>
                            <label
                              data-testid={ `${index}-ingredient-step` }
                              htmlFor={ ingredient }
                            >
                              { checkChecked(ingredient)
                                ? (
                                  <s>
                                    { `${ingredient}${ingredients.measures[index]}`}
                                  </s>)
                                : `${ingredient} ${ingredients.measures[index]}`}
                              <input
                                type="checkbox"
                                checked={ checkChecked(ingredient) }
                                value={ ingredient }
                                onChange={ () => setChecked(ingredient) }
                                id={ ingredient }
                              />
                            </label>

                          </div>);
                      }
                      return null;
                    })}
                  </div>
                )}
                <p data-testid="instructions">{details.strInstructions}</p>
              </div>
            )
      }
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ !finished }
          onClick={ finishRecipe }
        >
          finalizar
        </button>
      </Link>
    </div>
  );
};

ProgressRecipeDrinkPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProgressRecipeDrinkPage;
