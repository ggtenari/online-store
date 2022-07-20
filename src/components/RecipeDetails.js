import React, { useEffect } from 'react';
import { useRecipeApp } from '../context/RecipeAppProvider';

const RecipeDetais = () => {
  const { history, page } = useRecipeApp();

  useEffect(() => {
    console.log(history);
  }, []);

  return (<div>DETALHES DA RECEITA</div>);
};

export default RecipeDetais;
