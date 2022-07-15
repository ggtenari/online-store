import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const minLengthPassword = 6;

  const validations = (name, value) => {
    if (name === 'email' && regex.test(value) && password.length > minLengthPassword) {
      setIsButtonDisabled(false);
    } else if (name === 'password' && value
      .length > minLengthPassword && regex.test(email)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const saveEmailAndToken = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    history.push('/foods');
  };

  return (
    <div>
      <input
        name="email"
        type="text"
        data-testid="email-input"
        placeholder="email"
        onChange={ (event) => {
          setEmail(event.target.value);
          validations(event.target.name, event.target.value);
        } }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        placeholder="password"
        onChange={ (event) => {
          setPassword(event.target.value);
          validations(event.target.name, event.target.value);
        } }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isButtonDisabled }
        onClick={ saveEmailAndToken }
      >
        Enter
      </button>

    </div>
  );
};

export default LoginPage;
