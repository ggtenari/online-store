import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

function DrinksPage() {
  const { drinks } = useRecipeApp();

  return (
    <div>
      <h1>PAGINA DO DRINKSPAGE</h1>
      <Footer />
      {drinks && <RecipeCard /> }
      <Header title="Drinks" searchIconOnOff />
    </div>
  );
}

export default DrinksPage;
