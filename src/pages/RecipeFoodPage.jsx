import React, { useEffect } from 'react';
import RecipeDetais from '../components/RecipeDetails';
import { useRecipeApp } from '../context/RecipeAppProvider';
import fetchDetails from '../helpers/fetchDetails';

const RecipeFoodPage = ({ match: { params: { id } } }) => {
  const { foods } = useRecipeApp();

  const details = fetchDetails(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => console.log(response.meals));

  useEffect(() => {
    details();
  }, []);

  return (
    <div>
      {console.log(id)}
      <RecipeDetais />
    </div>
  );
};

export default RecipeFoodPage;
