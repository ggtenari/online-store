import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Footer from '../components/Footer';
import renderWithRouter from '../helpers/renderWithRouter';

describe('testando o componente Footer', () => {
  it('testa a renderizacao dos icones', () => {
    const { history } = renderWithRouter(<Footer />);

    const iconDrink = screen.getByAltText('icone-drink');
    const iconMeal = screen.getByAltText('icone-meal');
    expect(iconDrink).toBeInTheDocument();
    expect(iconMeal).toBeInTheDocument();
  });

  // it('testa se ao clicar no icone drink ele leva para a página correta', async () => {
  //   const { history } = renderWithRouter(<Footer />);

  //   const iconDrink = screen.getByTestId("drinks-bottom-btn");
  //   userEvent.click(iconDrink);
  //   await waitFor(() => expect(history.location.pathname).toBe("/drinks"))
  // });

  // it('testa se ao clicar no icone meal ele leva para a página correta', async () => {
  //   const { history } = renderWithRouter(<Footer />);

  //   const iconMeal = screen.getByTestId("food-bottom-btn");
  //   userEvent.click(iconMeal);
  //   await waitFor(() => expect(history.location.pathname).toBe('/foods'))
  // });
});
