import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      if (response.data.success) {
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error('Login failed', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (

    <div className="login-register">


      {/* Makes POST request to /login route */}
      <form className='login-register-internal-form' action="/login" method="POST">
        <div className="login-register-form-group">
          <label for="email">Email</label>
          <input
            className="form-control"
            name="username"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-register-form-group">
          <label for="password">Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-blue btn-sign">Login</button>
      </form>

      <div className="social-signup">
        {/* new style from bootstrap-social: btn-social btn-google */}
        <a className="btn btn-google" href="/auth/google" role="button">
          <FontAwesomeIcon className='social-icon' icon={faGoogle} />
          <p className='social-text'>Sign In with Google</p>
        </a>
        <a className="btn btn-facebook" href="/auth/google" role="button">
          <FontAwesomeIcon className='social-icon' icon={faFacebook} />
          <p className='social-text'>Sign In with Facebook</p>
        </a>
      </div>

    </div>
  );
};

export default Login;
