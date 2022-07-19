import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import fetchAPI from '../helpers/fetchAPI';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

function DrinksPage() {
  const { drinks, setDrinks } = useRecipeApp();
  const [categories, setCategories] = useState();
  const maxIndexDrinks = 12;
  const maxIndexCategories = 5;
  const apiRequests = () => {
    fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((response) => setDrinks(response.drinks.slice(0, maxIndexDrinks)));
    fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then((response) => setCategories(response.drinks.slice(0, maxIndexCategories)));
  };

  useEffect(() => {
    apiRequests();
  }, []);

  const handleCategorie = (name) => {
    fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`).then((response) => setDrinks(response.drinks));
  };

  return (
    <div>
      <h1>PAGINA DO DRINKSPAGE</h1>
      {categories && categories?.map((categorie) => (
        <button
          type="button"
          name={ categorie.strCategory }
          key={ categorie.strCategory }
          onClick={ (event) => handleCategorie(event.target.name) }
        >
          {categorie.strCategory}
        </button>))}
      <Header title="Drinks" searchIconOnOff />
      {drinks !== null
        && drinks.length === 1
        && <Redirect to={ `/drinks/${drinks[0].idDrink}` } />}
      {/* {drinks ?
        : alert('Sorry, we haven\'t found any recipes for these filters.')} */}
      <RecipeCard page="drinks" />
      <Footer />
    </div>
  );
}

export default DrinksPage;
