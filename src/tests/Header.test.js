import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

describe('7 - Implemente o header de acordo com a necessidade de cada tela', () => {
  it('testa elementos', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    history.push('/foods');

    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');

    expect(titleIconInput).toBeInTheDocument()
    expect(searchIconInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()

    userEvent.click(searchIconInput)

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument()

    userEvent.click(searchIconInput)

    expect(searchInput).not.toBeInTheDocument()

  })

  it('testa rota com render', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');
    
    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');

    expect(titleIconInput).toBeInTheDocument()
    expect(searchIconInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()

  });
});

  describe('Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil', () => {
  it('testa redirecionamento', () => {
    const {history} = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>)

    localStorage.setItem('name', JSON.stringify({ email: 'trybe@teste.com' }));
    history.push('/foods');
    const enterButton = screen.getByTestId('profile-top-btn')
    userEvent.click(enterButton)
    expect(history.location.pathname).toBe('/profile');
})
});
