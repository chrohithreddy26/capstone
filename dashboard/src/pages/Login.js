// Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = ({ onLogin }) => {
  return (
    <div>
      <h1 style={{ color: '#007bff'}}>Login Page</h1>
      <LoginForm onLogin={onLogin} />
      <p>
        Don't have an account? <Link to='/register'>create</Link>
      </p>
    </div>
  );
};

export default Login;
