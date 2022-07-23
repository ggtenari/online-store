import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando página Profile', () => {
  it('57 - Testa os elementos descritos no protótipo', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');

    const email = screen.getByTestId('profile-email');
    const doneRecipesButton = screen.getByTestId('profile-done-btn');
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    const logoutButton = screen.getByTestId('profile-logout-btn');    

    expect(email).toBeInTheDocument();
    expect(doneRecipesButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  /* it('58 - E-mail do usuário visível', () => {
    const { history } = renderWithRouter(<App />);


  }) */

  it('59 - E-mail do usuário visível', () => {
    const { history } = renderWithRouter(<App />);

    const email = screen.getByRole('button',
    {name: /Done Recipes/i});
    const favoriteButton = screen.getByRole('button',
    {name: /Favorite Recipes/i});
    const logoutButton = screen.screen.getByRole('button',
    {name: /Logout/i}); 

    expect(email).toBeInTheDocument()
    expect(favoriteButton).toBeInTheDocument()
    expect(logoutButton).toBeInTheDocument()
  })
  it('60 - Testando se ao clicar em Done Recipes é redirecionado corretamente', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');
    const doneRecipesButton = screen.getByTestId('profile-done-btn');
    userEvent.click(doneRecipesButton);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  it('61 - Testando se ao clicar em Favorite Recipes é redirecionado corretamente', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteButton);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('62 - Testando se ao clicar em Logout é redirecionado e o localStorage é limpo', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');

    localStorage.setItem('user', '{ "email": "email@mail.com" }');
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('doneRecipes', '[]');
    localStorage.setItem('favoriteRecipes', '[]');
    localStorage.setItem('inProgressRecipes', '{}');

    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/');

    expect(localStorage.getItem('email')).toBeNull();
    expect(localStorage.getItem('mealsToken')).toBeNull();
    expect(localStorage.getItem('cocktailsToken')).toBeNull();
    expect(localStorage.getItem('doneRecipes')).toBeNull();
    expect(localStorage.getItem('favoriteRecipes')).toBeNull();
    expect(localStorage.getItem('inProgressRecipes')).toBeNull();
  });
});