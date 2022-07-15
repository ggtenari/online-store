import React from 'react';

const SearchBar = () => (
  <div>
    BARRA DE BUSCA
    <label htmlFor="search-input">
      Pesquisar:
      <input
        type="search"
        name="searchBar"
        id="search-input"
        data-testid="search-input"
      />
    </label>
  </div>
);

export default SearchBar;
