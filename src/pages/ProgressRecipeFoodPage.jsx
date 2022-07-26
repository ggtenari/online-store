import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchDetailsFood from '../helpers/fetchDetailsFood';

const ProgressRecipeFoodPage = ({ match: { params: { id } } }) => {
  const { details,
    ingredientsInProgress,
    setDetails, setIngredientsInProgress,
  } = useRecipeApp();

  let receitasEmProgresso = [];

  if (localStorage.getItem('inProgressRecipes')) {
    receitasEmProgresso = JSON
      .parse(localStorage.getItem('inProgressRecipes'))
      .meals[id] ? JSON.parse(localStorage
        .getItem('inProgressRecipes')).meals[id]
      : [];
  }

  const [localStorageArray,
    setLocalStorageArray] = useState(receitasEmProgresso);

  useEffect(() => { console.log(localStorageArray); }, [localStorageArray]);
  const [finished, setFinished] = useState(false);

  const setChecked = (value) => {
    if (localStorageArray.includes(value)) {
      const prevLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      setLocalStorageArray(localStorageArray
        .filter((ingredient) => ingredient !== value));
      prevLocalStorage.meals[id] = localStorageArray
        .filter((ingredient) => ingredient !== value);
      localStorage.setItem('inProgressRecipes', JSON.stringify(prevLocalStorage));
    } else {
      const prevLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      console.log(prevLocalStorage);
      prevLocalStorage.meals[id] = [...localStorageArray, value];
      setLocalStorageArray([...localStorageArray, value]);
      localStorage.setItem('inProgressRecipes', JSON.stringify(prevLocalStorage));
    }
  };

  const checkChecked = (value) => (!!localStorageArray.includes(value));
  const style = {
    width: '150px',
    heigth: '150px',
  };

  const finishRecipe = () => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete local.meals[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(local));
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    doneRecipes.push(id);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  };

  useEffect(() => {
    fetchDetailsFood(id).then((response) => {
      const recipeDetails = response.meals[0];
      setDetails(recipeDetails);
      const ingredientList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Ingredient') && value !== '')));
      const measureList = Object
        .values(Object
          .fromEntries(Object
            .entries(recipeDetails)
            .filter(([key, value]) => key.includes('Measure') && value !== '')));
      setIngredientsInProgress({ ingredientList, measureList });
    });
    if (!localStorage.getItem('doneRecipes')) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: {}, cocktails: {} }));
    }
  }, []);

  useEffect(() => {
    if (ingredientsInProgress.ingredientList) {
      if (ingredientsInProgress
        .ingredientList.length === localStorageArray.length) {
        setFinished(true);
      } else {
        setFinished(false);
      }
    }
  }, [localStorageArray]);

  return (
    <div>
      {
        details && (
          <div>
            <div key={ details.strMeal }>
              <img
                data-testid="recipe-photo"
                src={ details.strMealThumb }
                alt={ `imagem da receita ${details.strMeal}` }
                style={ style }
              />
              <h3 data-testid="recipe-title">{details.strMeal}</h3>
              <h3 data-testid="recipe-category">{details.strCategory}</h3>
            </div>
            { ingredientsInProgress.ingredientList
              && (
                <div>
                  {
                    ingredientsInProgress.ingredientList.map((ingrediente, index) => {
                      if (ingrediente !== null) {
                        return (
                          <div key={ index }>
                            <label
                              data-testid={ `${index}-ingredient-step` }
                              htmlFor={ ingrediente }
                            >
                              { checkChecked(ingrediente)
                                ? (
                                  <s>
                                    {(
                                      `${ingrediente}${ingredientsInProgress
                                        .measureList[index]}`
                                    )}
                                  </s>)
                                : `${ingrediente} ${ingredientsInProgress
                                  .measureList[index]}`}
                              <input
                                type="checkbox"
                                checked={ checkChecked(ingrediente) }
                                value={ ingrediente }
                                id={ ingrediente }
                                onChange={ () => setChecked(ingrediente) }
                                />
                                </ label>

                                   </div>
                        )}
                    })
                  }
                  <button type="button" data-testid="finish-recipe-btn">
                    finalizar
                  </button>
                </div>
              ) }

                          </div>
                        );
                      }
                      return null;
                    })
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
              ) }

            <p data-testid="instructions">{details.strInstructions}</p>
          </div>
        )
      }
    </div>
  );
};

ProgressRecipeFoodPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProgressRecipeFoodPage;
