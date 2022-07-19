import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

function DrinksPage() {
  const { drinks } = useRecipeApp();

  return (
    <div>
      <h1>PAGINA DO DRINKSPAGE</h1>
      <Header title="Drinks" searchIconOnOff />
      {drinks !== null
        && drinks.length === 1
        && <Redirect to={ `/drinks/${drinks[0].idDrink}` } />}
      {drinks ? <RecipeCard />
        : alert('Sorry, we haven\'t found any recipes for these filters.')}
      <Footer />
    </div>
  );
}

export default DrinksPage;
