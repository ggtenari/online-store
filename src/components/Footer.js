import React from 'react';
import '../css/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div className="container-footer" data-testid="footer">
      <a href="/drinks" data-testid="drinks-bottom-btn">
        <img src={ drinkIcon } alt="" />
      </a>
      <a href="/foods" data-testid="food-bottom-btn">
        <img src={ mealIcon } alt="" />
      </a>
    </div>
  );
}

export default Footer;
