import React, { useState, useEffect } from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';
import RecipeDetails from '../components/RecipeDetails';
import fetchDetailsDrink from '../helpers/fetchDetailsDrink';
import fetchRecomendedFood from '../helpers/fecthRecomendedFoods';

const RecipeDrinkPage = ({ match: { params: { id } } }) => {
  const { details, setDetails, setPage } = useRecipeApp();
  const [ingredients, setIngredient] = useState([]);
  const [measures, setMeasure] = useState([]);
  const [recomendedFoods, setRecomendedFoods] = useState();

  useEffect(() => {
    fetchDetailsDrink(id).then((response) => {
      const recipeDetails = response.drinks[0];
      setDetails(recipeDetails);
      const ingredientList = Object.values(Object.fromEntries(Object.entries(recipeDetails).filter(([key, value]) => key.includes('Ingredient') && value !== null)));
      const measureList = Object.values(Object.fromEntries(Object.entries(recipeDetails).filter(([key, value]) => key.includes('Measure') && value !== null)));
      setPage('drinkDetails');
      setIngredient(ingredientList);
      setMeasure(measureList);
    });
    fetchRecomendedFood().then((response) => setRecomendedFoods(response.meals));
  }, [id]);

  return (
    <div>
      <RecipeDetails ingredients={ ingredients } measures={ measures } recomendeds={ recomendedFoods } />
    </div>
  );
};

export default RecipeDrinkPage;
