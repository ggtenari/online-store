import React from 'react';
import copyToClipboard from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ testid, url }) {
  const handleOnClick = () => {
    copyToClipboard(url);
    alert('Link copied!');
  };
  // const copyToClipboard = () => {
  //   const successPromise = copy(url);
  //   if (successPromise) {
  //   }
  // };
  return (
    <input
      data-testid={ testid }
      onClick={ handleOnClick }
      type="image"
      src={ shareIcon }
      alt="Share icon"
    />
  );
}

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareButton;
