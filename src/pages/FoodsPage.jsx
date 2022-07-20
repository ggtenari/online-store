import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
import fetchAPI from '../helpers/fetchAPI';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipesCard';
import { useRecipeApp } from '../context/RecipeAppProvider';

const FoodsPage = () => {
  const { setFoods } = useRecipeApp();
  const [categories, setCategories] = useState();
  const maxIndexFoods = 12;
  const maxIndexCategories = 5;

  const apiRequests = () => {
    fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => setFoods(response.meals.slice(0, maxIndexFoods)));
    fetchAPI('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) => setCategories(response.meals.slice(0, maxIndexCategories)));
  };
  useEffect(() => {
    apiRequests();
  }, []);
  // useEffect(() => {
  //   console.log(categories);
  //   console.log(foods);
  // }, [foods, categories]);

  const handleCategorie = async (name) => {
    await fetchAPI(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`).then((response) => setFoods(response.meals));
  };
  const handleOnClickAll = async () => {
    fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => setFoods(response.meals.slice(0, maxIndexFoods)));
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
      {/* {foods !== null
        && foods.length === 1
        && <Redirect to={ `/foods/${foods[0].idMeal}` } />} */}
      {/* {foods ? <RecipeCard />
        : alert('Sorry, we haven\'t found any recipes for these filters.')} */}
      <RecipeCard page="foods" />
      PAGINA DO FOODSPAGE
      <Footer />
    </div>
  );
};
export default FoodsPage;
