import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchFoods from '../helpers/fetchfoods';

const FoodsPage = () => {
  const { setFoods, setPage } = useRecipeApp();
  const [categories, setCategories] = useState();
  const maxIndexFoods = 12;
  const maxIndexCategories = 5;

  const apiRequests = () => {
    fetchFoods('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => setFoods(response.meals.slice(0, maxIndexFoods)));
    fetchFoods('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) => setCategories(response.meals.slice(0, maxIndexCategories)));
  };
  useEffect(() => {
    apiRequests();
  }, []);

  const handleOnClickAll = async () => {
    fetchFoods('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => setFoods(response.meals.slice(0, maxIndexFoods)));
    setToggle('');
  };
  const handleCategorie = async (name) => {
    if (toggle === name) {
      console.log('if');
      handleOnClickAll();
    } else {
      setToggle(name);
      fetchFoods(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`).then((response) => setFoods(response.meals));
    }
  };

  return (
    <div>
      <Header title="Foods" searchIconOnOff />
      {categories && categories.map((categorie) => (
        <button
          data-testid={ `${categorie.strCategory}-category-filter` }
          type="button"
          name={ categorie.strCategory }
          key={ categorie.strCategory }
          onClick={ (event) => handleCategorie(event.target.name) }
        >
          {categorie.strCategory}
        </button>

      ))}
      <button
        onClick={ handleOnClickAll }
        data-testid="All-category-filter"
        type="button"
      >
        All
      </button>
      <RecipeCard page="foods" />
      <p>PAGINA DO FOODSPAGE</p>
      <Footer />
    </div>
  );
};
export default FoodsPage;
