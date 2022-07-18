import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, searchIconOnOff }) {
  const history = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(true);

  const searchBarOnOff = () => {
    if (showSearchBar) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  };

  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>
      <button type="button" onClick={ () => history.push('/profile') }>
        Enter
        <img
          src={ profileIcon }
          alt="Profile icon"
          data-testid="profile-top-btn"
        />
      </button>
      {searchIconOnOff && (
        <input
          data-testid="search-top-btn"
          type="image"
          src={ searchIcon }
          onClick={ searchBarOnOff }
          alt="Search icon"
        />

      )}
      { showSearchBar && <SearchBar /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIconOnOff: PropTypes.bool.isRequired,
};

export default Header;
