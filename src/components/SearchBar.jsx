import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchFoods from '../helpers/fetchfoods';
import fetchDrinks from '../helpers/fetchDrinks';

const SearchBar = () => {
  const { searchInput,
    setSearchInput,
    valueInputRadio,
    setValueInputRadio,
    url,
    setUrl,
    setFoods,
    setDrinks,
    page,
  } = useRecipeApp();

  const [redirect, setRedirect] = useState({
    goLink: false,
    link: '',
  });

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
    if (page === 'foods') {
      fetchFoods(url.foods).then((response) => {
        if (response.meals === null) {
          alert('Sorry, we haven\'t found any recipes for these filters.');
        } else if (response.meals.length === 1) {
          setFoods(response.meals);
          setRedirect({
            goLink: true,
            link: `/foods/${response.meals[0].idMeal}`,
          });
        } else {
          setFoods(response.meals);
        }
      });
    }
    if (page === 'drinks') {
      fetchDrinks(url.drinks).then((response) => {
        if (!response || response.drinks === null) {
          alert('Sorry, we haven\'t found any recipes for these filters.');
        } else if (response.drinks.length === 1) {
          setDrinks(response.drinks);
          setRedirect({
            goLink: true,
            link: `/drinks/${response.drinks[0].idDrink}`,
          });
        } else {
          setDrinks(response.drinks);
        }
      });
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
        { redirect.goLink && <Redirect to={ redirect.link } />}
      </div>

    </div>
  );
};

export default SearchBar;
