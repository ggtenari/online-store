import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/Login';
import FoodsPage from '../pages/FoodsPage';
import DrinksPage from '../pages/DrinksPage';
import RecipeFoodPage from '../pages/RecipeFoodPage';
import RecipeDrinkPage from '../pages/RecipeDrinkPage';
import ProgressRecipeFoodPage from '../pages/ProgressRecipeFoodPage';
import ProgressRecipeDrinkPage from '../pages/ProgressRecipeDrinkPage';
import Profile from '../pages/Profile';
import DoneRecipesPage from '../pages/DoneRecipesPage';
import FavoriteRecipesPage from '../pages/FavoriteRecipesPage';

const AppRoutes = () => (

  <div>
    <Route exact path="/" component={ LoginPage } />
    <Route exact path="/foods" component={ FoodsPage } />
    <Route exact path="/drinks" component={ DrinksPage } />
    <Route exact path="/foods/:id" component={ RecipeFoodPage } />
    <Route exact path="/drinks/:id" component={ RecipeDrinkPage } />
    <Route
      exact
      path="/foods/:id/in-progress"
      component={ ProgressRecipeFoodPage }
    />
    <Route
      exact
      path="/drinks/:id/in-progress"
      component={ ProgressRecipeDrinkPage }
    />
    <Route exact path="/profile" component={ Profile } />
    <Route exact path="/done-recipes" component={ DoneRecipesPage } />
    <Route exact path="/favorite-recipes" component={ FavoriteRecipesPage } />
  </div>
);

export default AppRoutes;
