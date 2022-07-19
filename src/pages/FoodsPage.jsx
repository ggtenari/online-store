import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

const FoodsPage = () => {
  const { foods } = useRecipeApp();

  return (
    <div>
      <Header title="Foods" searchIconOnOff />
      PAGINA DO FOODSPAGE
      {foods !== null
        && foods.length === 1
        && <Redirect to={ `/foods/${foods[0].idMeal}` } />}
      {foods ? <RecipeCard />
        : alert('Sorry, we haven\'t found any recipes for these filters.')}
      <Footer />
    </div>
  );
};
export default FoodsPage;
