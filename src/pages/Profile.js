import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const loginUser = () => {
    const response = localStorage.getItem('user');
    if (response) {
      console.log(response);
      return JSON.parse(response);
    }
    return 'Email not found';
  };
  useEffect(() => { setEmail(loginUser().email); }, []);
  const logoutBtnClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <div>
        <Header title="Profile" history={ history } />
        <Footer />
        <div data-testid="profile-email">
          { email }
        </div>

      </div>

      <div>
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
};

Profile.prototype = {
  history: PropTypes.shape().isRequired,
};

export default Profile;
