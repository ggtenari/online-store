import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ContextRecipeApp from './ContextRecipeApp';

function RecipeAppProvider({ children }) {
  const [state, setState] = useState([]);

  const contextValue = {
    state,
    setState,
  };

  return (
    <ContextRecipeApp.Provider value={ contextValue }>
      {children}
    </ContextRecipeApp.Provider>
  );
}

RecipeAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeAppProvider;
export const useRecipeApp = () => useContext(ContextRecipeApp);
