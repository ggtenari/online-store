import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeDetails = (props) => {
  const { ingredients, measures, recomendeds } = props;
  const { details, page } = useRecipeApp();

  const style = {
    width: '150px',
    heigth: '150px',
  };

  // useEffect(() => {
  //   console.log(history);
  //   console.log(details);
  //   console.log(props);
  // }, []);

  const filterRecipes = (recipes) => {
    const maxCard = 6;
    let cards = recipes;
    if (recipes && recipes.length > maxCard) cards = recipes.slice(0, maxCard);
    return cards;
  };

  return (
    <div>
      <div>
        DETALHES DA RECEITA
      </div>

      {
        page === 'foodDetails'
        && details
          && (
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
              { ingredients
              && (
                <div>
                  {ingredients.map((ingredient, index) => (
                    <p
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`-${ingredient} - ${measures[index]}`}
                    </p>
                  ))}
                </div>
              )}

              <p data-testid="instructions">{details.strInstructions}</p>
              <Link to={ details.strYoutube }>
                <div data-testid="video">{details.strYoutube}</div>
              </Link>
              <div>
                <h5>Receitas recomendadas</h5>
                <div>
                  {recomendeds && filterRecipes(recomendeds).map((recomended, index) => (
                    <div data-testid={ `${index}-recomendation-card` } key={ index }>
                      <Link to={ `/drinks/${recomended.idDrink}` }>
                        <img
                          data-testid={ `${index}-card-img` }
                          src={ recomended.strDrinkThumb }
                          alt={ `imagem da receita ${index}` }
                          style={ style }
                        />
                        <div
                          data-testid={ `${index}-card-name` }
                        >
                          { recomended.strDrink }
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      }

      {
        page === 'drinkDetails'
          && details
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
                { ingredients
                && (
                  <div>
                    {ingredients
                      .map((ingredient, index) => (
                        <p
                          key={ index }
                          data-testid={ `${index}-ingredient-name-and-measure` }
                        >
                          {`-${ingredient} - ${measures[index]}`}
                        </p>
                      ))}
                  </div>
                )}

                <p data-testid="instructions">{details.strInstructions}</p>
                <div>
                  <h5>Receitas recomendadas</h5>
                  <div>
                    {recomendeds
                    && filterRecipes(recomendeds)
                      .map((recomended, index) => (
                        <div data-testid={ `${index}-recomendation-card` } key={ index }>
                          <Link to={ `/foods/${recomended.idMeal}` }>
                            <img
                              data-testid={ `${index}-card-img` }
                              src={ recomended.strMealThumb }
                              alt={ `imagem da receita ${index}` }
                              style={ style }
                            />
                            <div
                              data-testid={ `${index}-card-name` }
                            >
                              { recomended.strMeal }
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )
      }
    </div>
  );
};

RecipeDetails.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  recomendeds: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default RecipeDetails;
