import React from 'react';
// import React, { useState } from 'react';

// import { Redirect, Link } from 'react-router-dom';
// import { useRecipeApp } from '../context/RecipeAppProvider';
const RecipeDetails = () =>
// const RecipeDetails = (props) => {
// const { ingredients, measures, recomendeds, idRecipe } = props;
// // const localStorageObject = {};
// const [redirect, setRedirect] = useState({ goLink: false, link: '' });
// const { details, page } = useRecipeApp();

// const styleCarousel = {
//   width: '360px',
//   heigth: '180px',
//   display: 'flex',
//   overflow: 'auto',
// };
// styleCarousel['white-space'] = 'nowrap';

// const styleItem = {
//   padding: '20px',
//   width: '60%',
//   heigth: '180px',
//   float: 'left',
// };

// const style = {
//   width: '150px',
//   heigth: '150px',
// };

// const setLink = (pagina) => {
//   console.log(idRecipe);
//   setRedirect({ goLink: true, link: `/${pagina}/${idRecipe}/in-progress` });
// };

// const filterRecipes = (recipes) => {
//   const maxCard = 6;
//   let cards = recipes;
//   if (recipes && recipes.length > maxCard) cards = recipes.slice(0, maxCard);
//   return cards;
// };

// const handleStartRecipe = () => {
//   console.log('handleStartRecipe');
// };
// handleStartRecipe();

  (
    <div>
      <div>
        DETALHES DA RECEITA
      </div>
      {/* {
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
              <button
                type="button"
                onClick={ () => setLink('foods') }
                className="startRecipe"
                data-testid="start-recipe-btn"
              >
                Start Recipe

              </button>
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
                <button
                  type="button"
                  onClick={ () => setLink('drinks') }
                  className="startRecipe"
                  data-testid="start-recipe-btn"
                >
                  Start Recipe

                </button> */}
    </div>
  );
{ /* {
        page === 'foodInProgress'
        && details && (
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
                  {ingredientsInProgress.ingredientList.map((ingrediente, index) => (
                    <div key={ index }>
                      <label
                        data-testid={ `${index}-ingredient-step` }
                        htmlFor={ ingrediente }
                      >
                        {`${ingrediente} ${ingredientsInProgress.measureList[index]}`}
                        <input
                          type="checkbox"
                          checked={ foodCheck[ingrediente] }
                          value={ ingrediente }
                          id={ ingrediente }
                          onChange={ (event) => setChecked(event.target.value) }

                  {ingredients.map((ingredients1, index) => (
                    <p
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`-${ingredients1} - ${measures[index]}`}
                    </p>))}

                </div>
              )}
            <p data-testid="instructions">{details.strInstructions}</p>
          </div>
        )
      } */ }
//       {redirect.goLink && <Redirect to={ redirect.link } />}
//     </div>
//   );
// };

// RecipeDetails.propTypes = {
//   ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//   measures: PropTypes.arrayOf(PropTypes.string).isRequired,
//   recomendeds: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
//   idRecipe: PropTypes.string.isRequired,
// };

export default RecipeDetails;
