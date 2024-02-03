import React from 'react';
import RegisterForm from '../components/RegisterForm';
import './Register.css';
const Register = ({ onRegister }) => {
  return (
    <div>
      <h1>Register Page</h1>
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default Register;
