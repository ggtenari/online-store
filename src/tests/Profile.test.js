import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Profile from '../pages/Profile';
import App from '../App'

describe('57, 59 - Implemente os elementos da tela de perfil', () => {
  it('Todos o data-testid do email e de todos os botões', () => {
    const { history } = renderWithRouter(<Profile />)

    const userEmail = screen.getByTestId('profile-email');
    const doneRecipesButton = screen.getByTestId('profile-done-btn');
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    const logoutButton = screen.getByTestId('profile-logout-btn');

    expect(userEmail).toBeInTheDocument();
    expect(doneRecipesButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  })
}); 

describe('58 - Email visível', () => {
  it('testa se o email tá visível', () => {
  const { history } = renderWithRouter(<App />)
        const emailInput = screen.getByTestId('email-input')
        const passwordInput = screen.getByTestId('password-input')
        userEvent.type(emailInput, 'email@mail.com')
        userEvent.type(passwordInput, '1234567')
        const btnLogin = screen.getByTestId('login-submit-btn')
        expect(btnLogin).toBeInTheDocument()
        expect(btnLogin).toBeEnabled()
        userEvent.click(btnLogin)

        expect(screen.getByTestId('page-title')).toBeInTheDocument()
        history.push('/profile')
        const userEmail = screen.getByTestId('profile-email')
        expect(userEmail).toBeInTheDocument()
        
  })
}); 

describe('60 até 62 - Redirecionamentos botões - fav, done recipes e logout', () => {
  it('Redireciona Done Recipes', () => {
    const { history } = renderWithRouter(<Profile />)

    const doneRecipesButton = screen.getByTestId('profile-done-btn');
    userEvent.click(doneRecipesButton);
    expect(history.location.pathname).toBe('/done-recipes');
  })
  it('Redireciona Favorite', () => {
    const { history } = renderWithRouter(<Profile />)

    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteButton);
    expect(history.location.pathname).toBe('/favorite-recipes');
  })
  it('Redireciona logout e limpa local storage', () => {
    const { history } = renderWithRouter(<Profile />)

    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/');
  })
}); 

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
