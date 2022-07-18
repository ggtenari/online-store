import React, { useEffect } from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeCard = () => {
  const { foods, drinks, location: { pathname } } = useRecipeApp();
  const style = {
    width: '50px',
    heigth: '50px',
  };

  const filterRecipes = (recipes) => {
    const maxCard = 12;
    let cards = recipes;
    if (recipes.length > maxCard) cards = recipes.slice(0, maxCard);
    return cards;
  };

  return (
    <div>
      Card de Receita
      <div>Receita</div>
      { pathname === '/foods'
        && Object(filterRecipes(foods)).map((food, index) => (
          <div key={ food.strMeal }>
            <img
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb }
              alt={ `imagem da receita ${index}` }
              style={ style }
            />
            <div data-testid={ `${index}-card-name` }>{ food.strMeal }</div>
          </div>
        ))}
      { pathname === '/drinks'
        && Object(filterRecipes(drinks)).map((drink, index) => (
          <div key={ drink.strDrink }>
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ `imagem da receita ${index}` }
              style={ style }
            />
            <div key={ drink.strDrink }>{ drink.strDrink }</div>
          </div>
        ))}
    </div>
  );
};

export default RecipeCard;
