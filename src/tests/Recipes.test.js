import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

describe('teste das receitas', () => {
    it('redireciona se só tiver uma receita', async () => {
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
        
        history.push('/foods');

        const searchButton = screen.getByTestId('search-top-btn');
        userEvent.click(searchButton);

        const search= screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');

        userEvent.type(search, 'Big Mac')
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
        await waitFor(() => expect(history.location.pathname).toBe('/foods/53013'));
    });

    it('redireciona se só tiver uma bebida', async () => {
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
        history.push('/drinks');

        const searchButton = screen.getByTestId('search-top-btn');
        userEvent.click(searchButton);

        const search= screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');

        userEvent.type(search, 'Ace')
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
        await waitFor(() => expect(history.location.pathname).toBe('/drinks/17225'));
    });

    it('não achando, dispara alerta', async () => {
        const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
        history.push('/drinks');

        jest.spyOn(window, 'alert').mockImplementation(() => {});
        const searchButton = screen.getByTestId('search-top-btn');
        userEvent.click(searchButton);

        const search= screen.getByTestId('search-input');
        const nameSearch = screen.getByTestId('name-search-radio');
        const execSearch = screen.getByTestId('exec-search-btn');

        userEvent.type(search, 'a')
        userEvent.click(nameSearch);
        userEvent.click(execSearch);
        
        await waitFor(() =>  expect(window.alert).toBeCalledWith('Sorry, we haven\'t found any recipes for these filters.'));
    });
});