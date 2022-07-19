import React, { useEffect } from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchAPI from '../helpers/fetchAPI';

const SearchBar = () => {
  const { searchInput,
    setSearchInput,
    valueInputRadio,
    setValueInputRadio,
    url,
    setUrl,
    foods,
    setFoods,
    drinks,
    setDrinks,
    location: { pathname },
    history } = useRecipeApp();

  useEffect(() => {
    if (valueInputRadio === 'ingredientChecked') {
      setUrl({
        foods: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`,
        drinks: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`,
      });
    } else if (valueInputRadio === 'nameChecked') {
      setUrl({
        foods: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
        drinks: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`,
      });
    } else if (valueInputRadio === 'firstLetterChecked') {
      if (searchInput.length > 1) {
        alert('Your search must have only 1 (one) character');
      }
      setUrl({
        foods: `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`,
        drinks: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`,
      });
    }
  }, [valueInputRadio, searchInput]);

  const onClick = async () => {
    const recipesFoods = await fetchAPI(url.foods);
    const recipesDrinks = await fetchAPI(url.drinks);
    setFoods(recipesFoods.meals);
    setDrinks(recipesDrinks.drinks);
    console.log(typeof (recipesFoods.meals.length));
    if (pathname === '/foods' && recipesFoods.meals.length === 1) {
      history.push(`/foods/${recipesFoods.meals[0].idMeal}`);
    }
    if (pathname === '/drinks' && recipesDrinks.drinks.length === 1) {
      history.push(`/drinks/${recipesDrinks.drinks[0].idDrink}`);
    }
  };

  return (
    <div>
      <label htmlFor="search-input">
        Pesquisar:
        <input
          type="search"
          name="searchBar"
          id="search-input"
          data-testid="search-input"
          onChange={ ({ target }) => setSearchInput(target.value) }
        />
      </label>
      <div>
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            value="ingredientChecked"
            defaultChecked="true"
            onChange={ ({ target }) => setValueInputRadio(target.value) }
          />
          Ingredientes
        </label>

        <label htmlFor="name-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="name-search-radio"
            data-testid="name-search-radio"
            value="nameChecked"
            onChange={ ({ target }) => setValueInputRadio(target.value) }
          />
          Nome
        </label>

        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            name="search-radio"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            value="firstLetterChecked"
            onChange={ ({ target }) => setValueInputRadio(target.value) }
          />
          Primeira letra
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ onClick }
        >
          Buscar
        </button>
      </div>

    </div>
  );
};

export default SearchBar;
