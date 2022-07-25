import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider'

describe('Testes do searchbar', () => {
    it('10 - elementos da barra com seus atributos', () => {
      const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
  
      history.push('/foods');
      
      const searchButton = screen.getByTestId('search-top-btn');
      userEvent.click(searchButton)
  
      const search = screen.getAllByTestId('search-input');
      const ingredientSearch = screen.getAllByTestId('ingredient-search-radio');
      const nameSearch = screen.getAllByTestId('name-search-radio');
      const firstLetterSearch = screen.getAllByTestId('first-letter-search-radio');
      const execSearch = screen.getAllByTestId('exec-search-btn');

      expect(search).toBeInTheDocument()
      expect(ingredientSearch).toBeInTheDocument()
      expect(nameSearch).toBeInTheDocument()
      expect(firstLetterSearch).toBeInTheDocument()
      expect(execSearch).toBeInTheDocument()
    })
//     it('10 - elementos da barra com seus atributos', () => {
//       const { history } = renderWithRouter(<App />);
  
//       history.push('/foods');
      
//       const searchButton = screen.getByTestId('search-top-btn');
//       userEvent.click(searchButton)
  
//       const search = screen.getAllByTestId('search-input');
//       const ingredientSearch = screen.getAllByTestId('ingredient-search-radio');
//       const nameSearch = screen.getAllByTestId('name-search-radio');
//       const firstLetterSearch = screen.getAllByTestId('first-letter-search-radio');
//       const execSearch = screen.getAllByTestId('exec-search-btn');

//       expect(search).toBeInTheDocument()
//       expect(ingredientSearch).toBeInTheDocument()
//       expect(nameSearch).toBeInTheDocument()
//       expect(firstLetterSearch).toBeInTheDocument()
//       expect(execSearch).toBeInTheDocument()
//     })
/*     it('11 - 3 radion buttons implementados', () => {
        const { history } = renderWithRouter(<App />);
      }) */
/*       it('12A - API de comidas', () => {

      })   */
/*       it('12B - API de bebidas', () => {

      }) */
/*       it('13 - rota de detalhes de receitas p/ uma receita', () => {

      }) */
/*       it('14 - Mais de uma receita em cards', () => {

      }) */
/*       it('15 - alert', () => {

      }) */
})