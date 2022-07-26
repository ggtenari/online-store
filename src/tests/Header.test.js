import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '..helpers/renderWithRouter';
import App from '../App';
import RecipeAppProvider from '../context/RecipeAppProvider';

<<<<<<< HEAD
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
=======
describe('Testando o componente Header', () => {
  it('Verificando os elementos na tela', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    const profileIcon = screen.getByTestId('profile-top-btn');
    const pageTitle = screen.getByTestId('page-title');
    const searchIcon = screen.getByTestId('search-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('Verificando se a barra de pesquisa aparece ao clicar no botão', () => {
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);

    history.push('/foods');

    const dataTestIdSearch = 'search-input';

    const searchIcon = screen.getByTestId('search-top-btn');

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.getByTestId(dataTestIdSearch)).toBeInTheDocument();

    userEvent.click(searchIcon);

    expect(screen.queryByTestId(dataTestIdSearch)).not.toBeInTheDocument();
  });
});

<<<<<<< HEAD
  it('o header renderiza sem o search', () => {
  renderWithRouter(<App />);
  
  const titleIconInput = screen.getByTestId('profile-top-btn')
  const searchIconInput = screen.getByTestId('search-top-btn')
  const titleInput = screen.getByTestId('page-title')
=======
describe('7 - Implemente o header de acordo com a necessidade de cada tela', () => {
  it('testa elementos', () => {
    const { history } = renderWithRouter(<RecipeAppProvider><App /></RecipeAppProvider>);
    history.push('/foods');

    const titleIconInput = screen.getByTestId('profile-top-btn');
    const searchIconInput = screen.getByTestId('search-top-btn');
    const titleInput = screen.getByTestId('page-title');
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee

    expect(titleIconInput).toBeInTheDocument()
    expect(searchIconInput).toBeInTheDocument()
    expect(titleInput).toBeInTheDocument()
<<<<<<< HEAD
  });
=======
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee

    userEvent.click(searchIconInput)

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument()

    userEvent.click(searchIconInput)

    expect(searchInput).not.toBeInTheDocument()
  });
<<<<<<< HEAD
=======
});
>>>>>>> 9ddfb37acb27263f24524ec8dba6a66eb68e3dee
