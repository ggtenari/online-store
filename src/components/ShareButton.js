import React from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ url }) {
  const copyToClipboard = () => {
    copy(url);
    alert('Link copied!');
  };
  return (
    <input
      onClick={ copyToClipboard }
      type="image"
      src={ shareIcon }
      alt="Share icon"
    />
  );
}

ShareButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareButton;
