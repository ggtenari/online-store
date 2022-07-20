import React from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
  const handleOnClick = () => 'click';
  return (
    <input
      onClick={ handleOnClick }
      type="image"
      src={ shareIcon }
      alt="Share icon"
    />
  );
}

export default ShareButton;
