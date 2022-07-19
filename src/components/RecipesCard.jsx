import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={ `/foods/${food.idMeal}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ food.strMealThumb }
                alt={ `imagem da receita ${index}` }
                style={ style }
              />
              <div data-testid={ `${index}-card-name` }>{ food.strMeal }</div>
            </Link>
          </div>
        ))}
      { pathname === '/drinks'
        && Object(filterRecipes(drinks)).map((drink, index) => (
          <div key={ drink.strDrink }>
            <Link to={ `/drinks/${drink.idDrink}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ `imagem da receita ${index}` }
                style={ style }
              />
              <div data-testid={ `${index}-card-name` }>{ drink.strDrink }</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RecipeCard;
