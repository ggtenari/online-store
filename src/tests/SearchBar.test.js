import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

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
    });
    });
    
    describe('página foods', () => {
      afterEach(() => jest.restoreAllMocks());
    
      it('requisição correta buscando pelo nome', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = (<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'Arrabiata');
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
        );
      });
    
      it('requisição correta buscando pelo ingrediente', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const ingredientSearch = screen.getByTestId('ingredient-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'chicken');
        userEvent.click(nameSearch);
        userEvent.click(ingredientSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken',
        );
      });
    
      it('requisição certa - primeira letra', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'a');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
        );
      });
    
      it('alerta - mais de uma letra', async () => {
        const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/foods');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'aaa');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        await waitFor(() =>  expect(window.alert).toBeCalledWith(
          'Your search must have only 1 (one) character',
        ));
      });
    });
    
    describe('página drinks', () => {
      afterEach(() => jest.restoreAllMocks());
    
      it('requisição correta - nome', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'lemon');
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon',
        );
      });
    
      it('Testando se faz requisição corretamente buscando pelo ingrediente', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const ingredientSearch = screen.getByTestId('ingredient-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'Vodka');
        userEvent.click(ingredientSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka',
        );
      });
    
      it('correta - primeira letra', async () => {
        const fetch = jest.spyOn(global, 'fetch');
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'a');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        expect(fetch).toHaveBeenCalledWith(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
        );
      });
    
      it('alerta ao digitar mais de uma letra', async () => {
        const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    
        history.push('/drinks');
    
        const searchButton = screen.getByTestId('search-top-btn');
    
        userEvent.click(searchButton);
    
        const search = screen.getByTestId('search-input');
        const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');
    
        userEvent.type(search, 'aa');
        userEvent.click(firstLetterSearch);
        userEvent.click(execSearch);
    
        await waitFor(() =>  expect(window.alert).toBeCalledWith(
          'Your search must have only 1 (one) character',
        ));
      });
    });
