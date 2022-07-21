import React from 'react';
import '../css/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div className="container-footer" data-testid="footer">
      <a href="/drinks">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="icone-drink" />
      </a>
      <a href="/foods">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="icone-meal" />
      </a>
    </div>
  );
}

export default Footer;
