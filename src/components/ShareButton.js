import React from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ testid, url }) {
  const copyToClipboard = () => {
    copy(url);
    alert('Link copied!');
  };
  return (
    <input
      data-testid={ testid }
      onClick={ copyToClipboard }
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
