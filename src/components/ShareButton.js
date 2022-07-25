import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ testid, url }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    copy(url);
    setCopied(true);
  };
  return (
    <div>
      <input
        data-testid={ testid }
        onClick={ copyToClipboard }
        type="image"
        src={ shareIcon }
        alt="Share icon"
      />
      { copied && <span>Link copied!</span>}
    </div>
  );
}

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareButton;
