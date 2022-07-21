import React from 'react';

const StartRecipe = (props) => {
  const { ingredients, measures, recomendeds } = props;
  return (
    <button type="button" className="startRecipe">Start Recipe</button>
  );
};

export default StartRecipe;
