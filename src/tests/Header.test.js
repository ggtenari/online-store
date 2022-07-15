import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Header from '../components/Header';

describe('testando o componente Header', () => {
  it('testa a renderizacao do título e dos ícones ', () => {
    renderWithRouter(<Header />)
    const titleIconInput = screen.getByTestId('profile-top-btn')
    const searchIconInput = screen.getByTestId('search-top-btn')
    const titleInput = screen.getByTestId('page-title')
    })
    expect(titleIconInput).toBeInTheDocument()
    expect(searchIconInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
  })
  it('testa redirecionamento', () => {
    const {history} = renderWithRouter(<Header />)
    const enterButton = screen.getByRole('button', {
      name: /enter/i
    })
    const profilePage = screen.getByText(/Profile/i)
    userEvent.click(enterButton)
    expect(profilePage).toBeInTheDocument()
})

