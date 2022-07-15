import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/Login';
import FoodsPage from '../pages/FoodsPage';
import DrinksPage from '../pages/DrinksPage';
import RecipeFoodPage from '../pages/RecipeFoodPage';
import RecipeDrinkPage from '../pages/RecipeDrinkPage';
import ProgressRecipeFoodPage from '../pages/ProgressRecipeFoodPage';
import ProgressRecipeDrinkPage from '../pages/ProgressRecipeDrinkPage';
import ProfilePage from '../pages/ProfilePage';
import DoneRecipesPage from '../pages/DoneRecipesPage';
import FavoriteRecipesPage from '../pages/FavoriteRecipesPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Route exact path="/" component={ LoginPage } />
    <Route exact path="/foods" component={ FoodsPage } />
    <Route exact path="/drinks" component={ DrinksPage } />
    <Route exact path="/foods/{id-da-receita}" component={ RecipeFoodPage } />
    <Route exact path="/drinks/{id-da-receita}" component={ RecipeDrinkPage } />
    <Route
      exact
      path="/foods/{id-da-receita}/in-progress"
      component={ ProgressRecipeFoodPage }
    />
    <Route
      exact
      path="/drinks/{id-da-receita}/in-progress"
      component={ ProgressRecipeDrinkPage }
    />
    <Route exact path="/profile" component={ ProfilePage } />
    <Route exact path="/done-recipes" component={ DoneRecipesPage } />
    <Route exact path="/favorite-recipes" component={ FavoriteRecipesPage } />
  </BrowserRouter>
);

export default AppRoutes;
