import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({title, searchIconOnOff}) {
    const history = useHistory();
    const [showSearchBar, setShowSearchBar] = useState(false);
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
            <button onClick={ () => history.push('/profile') }>
                Enter
          <img
            src={ profileIcon }
            alt="Profile icon"
            data-testid="profile-top-btn"
          />
          </button>
          {searchIconOnOff && (
          <button type="button" onClick={ searchBarOnOff }>
            <img
                src={ searchIcon }
                alt="Search icon"
                data-testid="search-top-btn"
            />  
          </button>
          )}                            
          {showSearchBar && <SearchBar />}  
      </header>
    );
  }

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIconOnOff: PropTypes.bool.isRequired,
};

export default Header;
