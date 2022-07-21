import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecipeApp } from '../context/RecipeAppProvider';
import StartRecipe from './StartRecipe'


const RecipeDetails = (props) => {
  const { ingredients, measures, recomendeds, idRecipe } = props;
  console.log(id);
  const [redirect, setRedirect] = useState({goLink: false, link: ''})
  const { history, details, page } = useRecipeApp();

  const style = {
    width: '150px',
    heigth: '150px',
  };

  // useEffect(() => {
  //   console.log(history);
  //   console.log(details);
  //   console.log(props);
  // }, []);
  
  const setLink = (pagina) => {
    setRedirect({goLink: true, link: `/${pagina}/${idRecipe}/in-progress`})
  }

  const filterRecipes = (recipes) => {
    const maxCard = 6;
    let cards = recipes;
    if (recipes && recipes.length > maxCard) cards = recipes.slice(0, maxCard);
    return cards;
  };

  const handleStartRecipe = () => {

  }


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
                  {ingredients.map((ingredient, index) => <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>{`-${ingredient} - ${measures[index]}`}</p>)}
                </div>
              )}

              <p data-testid="instructions">{details.strInstructions}</p>
              <Link to={ details.strYoutube }><div data-testid="video">{details.strYoutube}</div></Link>
              <div>
                <h5>Receitas recomendadas</h5>
                <div>
                  {recomendeds && filterRecipes(recomendeds)?.map((recomended, index) => (
                    <div data-testid={ `${index}-recomendation-card` } key={ index }>
                      <Link to={ `/drinks/${recomended.idDrink}` }>
                        <img
                          data-testid={ `${index}-card-img` }
                          src={ recomended.strDrinkThumb }
                          alt={ `imagem da receita ${index}` }
                          style={ style }
                        />
                        <div data-testid={ `${index}-card-name` }>{ recomended.strDrink }</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={() => setLink('foods')} className="startRecipe">Start Recipe</button>
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
                    {ingredients.map((ingredient, index) => <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>{`-${ingredient} - ${measures[index]}`}</p>)}
                  </div>
                )}

                <p data-testid="instructions">{details.strInstructions}</p>
                <div>
                  <h5>Receitas recomendadas</h5>
                  <div>
                    {recomendeds && filterRecipes(recomendeds)?.map((recomended, index) => (
                    <div data-testid={ `${index}-recomendation-card` } key={ index }>
                      <Link to={ `/foods/${recomended.idMeal}` }>
                        <img
                          data-testid={ `${index}-card-img` }
                          src={ recomended.strMealThumb }
                          alt={ `imagem da receita ${index}` }
                          style={ style }
                        />
                        <div data-testid={ `${index}-card-name` }>{ recomended.strMeal }</div>
                      </Link>
                    </div>
                  ))}
                  </div>
                </div>
                <button type="button" onClick={() => setLink('drinks')} className="startRecipe">Start Recipe</button>
              </div>
            )
      }
      {redirect.goLink && <Redirect to={ redirect.link }></Redirect>}
    </div>
  );
};

export default RecipeDetails;
