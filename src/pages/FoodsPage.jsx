import React from 'react';
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
      {foods && <RecipeCard /> }
      <Footer />
    </div>
  );
};
export default FoodsPage;
