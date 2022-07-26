import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { useRecipeApp } from '../context/RecipeAppProvider';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const RecipeDetails = (props) => {
  const { ingredients, measures, recomendeds, idRecipe } = props;
  const [redirect, setRedirect] = useState({ goLink: false, link: '' });
  const [finished, setFinished] = useState('');
  const [started, setStarted] = useState(false);
  const { details, page } = useRecipeApp();
  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes')) {
      if (JSON.parse(localStorage.getItem('inProgressRecipes')).meals) {
        if (JSON.parse(localStorage.getItem('inProgressRecipes')).meals[idRecipe]
    || JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[idRecipe]) {
          setStarted(true);
        } else {
          setStarted(false);
        }
      } else if (JSON.parse(localStorage
        .getItem('inProgressRecipes')).cocktails[idRecipe]) {
        setStarted(true);
      } else {
        setStarted(false);
      }
    }
    if (localStorage.getItem('doneRecipes')) {
      const terminou = !!JSON
        .parse(localStorage.getItem('doneRecipes')).includes(idRecipe);
      setFinished(terminou);
      console.log(!!JSON
        .parse(localStorage.getItem('doneRecipes')).includes(idRecipe));
    }
  }, []);

  const styleCarousel = {
    width: '360px',
    heigth: '180px',
    display: 'flex',
    overflow: 'auto',
  };
  styleCarousel['white-space'] = 'nowrap';

  const styleItem = {
    padding: '20px',
    width: '60%',
    heigth: '180px',
    float: 'left',
  };

  const style = {
    width: '150px',
    heigth: '150px',
  };

  const setLink = (pagina) => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: {}, cocktails: {} }));
    }
    console.log(idRecipe);
    setRedirect({ goLink: true, link: `/${pagina}/${idRecipe}/in-progress` });
  };

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
              <FavoriteButton
                testid="favorite-btn"
                objRecipe={ details }
                typeRecipes="food"
              />
              <ShareButton testid="share-btn" url={ `http://localhost:3000/foods/${idRecipe}` } />
              { ingredients
              && (
                <div>
                  {ingredients.map((ingredient, index) => (
                    <p
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`-${ingredient} - ${measures[index]}`}
                    </p>))}
                </div>
              )}
              <p data-testid="instructions">{details.strInstructions}</p>
              <Link
                to={ details.strYoutube }
              >
                <div data-testid="video">
                  {details.strYoutube}
                </div>
              </Link>
              <div>
                <h5>Receitas recomendadas</h5>
                <div style={ styleCarousel }>
                  {recomendeds && filterRecipes(recomendeds).map((recomended, index) => (
                    <div
                      data-testid={ `${index}-recomendation-card` }
                      key={ index }
                      style={ styleItem }
                    >
                      <Link to={ `/drinks/${recomended.idDrink}` }>
                        <img
                          data-testid="recipe-photo"
                          src={ recomended.strDrinkThumb }
                          alt={ `imagem da receita ${index}` }
                          style={ style }
                        />
                        <h3
                          data-testid={ `${index}-recomendation-title` }
                        >
                          {recomended.strDrink}
                        </h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {!finished && (
                <button
                  type="button"
                  onClick={ () => setLink('foods') }
                  className="startRecipe"
                  data-testid="start-recipe-btn"
                >
                  {started ? 'Continue Recipe' : 'Start Recipe'}

                </button>)}
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
                <FavoriteButton
                  testid="favorite-btn"
                  objRecipe={ details }
                  typeRecipes="drink"
                />
                <ShareButton testid="share-btn" url={ `http://localhost:3000/drinks/${idRecipe}` } />

                { ingredients
                && (
                  <div>
                    {ingredients.map((ingredient, index) => (
                      <p
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`-${ingredient} - ${measures[index]}`}
                      </p>))}
                  </div>
                )}
                <p data-testid="instructions">{details.strInstructions}</p>
                <div>
                  <h5>Receitas recomendadas</h5>
                  <div style={ styleCarousel }>
                    {recomendeds && filterRecipes(recomendeds)
                      .map((recomended, index) => (
                        <div
                          data-testid={ `${index}-recomendation-card` }
                          key={ index }
                          style={ styleItem }
                        >
                          <Link to={ `/foods/${recomended.idMeal}` }>
                            <img
                              data-testid="recipe-photo"
                              src={ recomended.strMealThumb }
                              alt={ `imagem da receita ${index}` }
                              style={ style }
                            />
                            <h3
                              data-testid={ `${index}-recomendation-title` }
                            >
                              {recomended.strMeal}
                            </h3>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                {!finished && (
                  <button
                    type="button"
                    onClick={ () => setLink('drinks') }
                    className="startRecipe"
                    data-testid="start-recipe-btn"
                  >
                    {started ? 'Continue Recipe' : 'Start Recipe'}

                  </button>)}

              </div>
            )
      }
      {redirect.goLink && <Redirect to={ redirect.link } />}
    </div>
  );
};

RecipeDetails.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  recomendeds: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  idRecipe: PropTypes.string.isRequired,
};

export default RecipeDetails;
