import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Profile from '../pages/Profile';

describe('Testar o componente Profile', () => {
  it('testar rotas dos botões', async () => {
    const { history } = renderWithRouter(<Profile />)
  })
}); 