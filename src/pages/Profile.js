import React from 'react';
import { useHistory } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  const loginUser = JASON.parse(localStorage.getItem('user'));
  const logoutBtnClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      {/* <Header title="Profile" history={ history } />
      <Footer /> */}
      <div>
        <p data-testid="profile-email">{ loginUser?.email }</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="submit"
          data-testid="profile-logout-btn"
          onClick={ logoutBtnClick }
        >
          Logout
        </button>
      </div>
    </>
  );
}
