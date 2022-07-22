import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';


describe('Testar o componente Profile', () => {
  it('testar elementos renderizados',  () => {
    renderWithRouter(<Profile />);
    const email = screen.getByTestId('/profile-email/i')
    expect(email).toBeInTheDocument();

    const doneRecipe = screen.getByTestId('/profile-done-btn/i')
    expect(doneRecipe).toBeInTheDocument();

    const favoriteRecipe = screen.getByTestId('profile-favorite-btn/i');
    expect(favoriteRecipe).toBeInTheDocument();

    const logout = screen.getByTestId('profile-logout-btn');
    expect(logout).toBeInTheDocument();
  });

  it('Funcionamento do botão doneRecipe', async() => {
    const { history } =renderWithRouter(<Profile />);
    const doneRecipe = screen.getByTestId('/profile-done-btn/i')

    userEvent.click(doneRecipe);

    await waitFor(() => expect(history.location.pathname).toBe('/done-recipe'));
  });

  it('Funcionamento do botão favoriteRecipe', async() => {
    const { history } =renderWithRouter(<Profile />);
    const favoriteRecipe = screen.getByTestId('/profile-favorite-btn/i')

    userEvent.click(favoriteRecipe);

    await waitFor(() => expect(history.location.pathname).toBe('/favorite-recipe/i'));
  });

  it('Funcionamento do botão logout', async() => {
    const { history } =renderWithRouter(<Profile />);
    const logout = screen.getByTestId('profile-logout-btn/i');

    userEvent.click(logout);
    localStorage.clear()

    await waitFor(() => expect(history.location.pathname).toBe('/'));
  });

  






    // history.push('/profile');
    // const logout = screen.getByTestId('profile-logout-btn');
    // userEvent.click(logout);
    // localStorage.clear();
    // // history.push('/');
    // expect(history.location.pathname).toBe('/');

  })

