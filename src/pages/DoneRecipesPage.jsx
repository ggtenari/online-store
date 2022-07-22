import React from 'react';
import Header from '../components/Header';

export default function DoneRecipesPage() {
  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          name="all"
        // onClick={ handleFilter }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          name="food"
        // onClick={ handleFilter }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          name="drink"
        // onClick={ handleFilter }
        >
          Drinks
        </button>
      </div>
      <div key="">
        <span
          data-testid={ `${index}-horizontal-name` }
        >
          { Name }
        </span>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt="card-recipe"
          // onClick={}
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {/* condição para categoria,nacionalidade,alcoolico */}
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          {/* condição para data */}
        </p>
        {/* botões e filtros */}

      </div>
    </>

  );
}
