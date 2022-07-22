import React, { useEffect } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import { useRecipeApp } from '../context/RecipeAppProvider';

const ProgressRecipeFoodPage = () => {
  const { setPage } = useRecipeApp();
  useEffect(() => {
    setPage('foodInProgress');
  }, []);

  return (
    <div>
      <RecipeDetails />
    </div>
  );
};

export default ProgressRecipeFoodPage;
