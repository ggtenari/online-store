import React, { useEffect, useState } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchDetailsFood from '../helpers/fetchDetailsFood';
import fetchRecomendedDrinks from '../helpers/fetchRecomendedDrinks';

const RecipeFoodPage = (props) => {
  const { id } = props.match.params;
  const { page, setPage, details, setDetails } = useRecipeApp();
  const [ingredients, setIngredient] = useState([]);
  const [measures, setMeasure] = useState([]);
  const [recomendedDrinks, setRecomendedDrinks] = useState();

  useEffect(() => {
    fetchDetailsFood(id).then((response) => {
      const recipeDetails = response.meals[0];
      setDetails(recipeDetails);
      const ingredientList = Object.values(Object
        .fromEntries(Object.entries(recipeDetails)
          .filter(([key, value]) => key.includes('Ingredient') && value !== '')));
      const measureList = Object.values(Object.fromEntries(Object.entries(recipeDetails)
        .filter(([key, value]) => key.includes('Measure') && value !== '')));
      setPage('foodDetails');
      setIngredient(ingredientList);
      setMeasure(measureList);
    });
    fetchRecomendedDrinks().then((response) => setRecomendedDrinks(response.drinks));
  }, [id]);

  return (
    <div>
      <RecipeDetails
        ingredients={ ingredients }
        id={ id }
        measures={ measures }
        recomendeds={ recomendedDrinks }
      />
    </div>
  );
};

export default RecipeFoodPage;
