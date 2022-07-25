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
