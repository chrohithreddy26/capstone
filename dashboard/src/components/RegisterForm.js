// RegisterForm.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './RegisterForm.css';
const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Perform registration logic, e.g., make an API request
    onRegister(username, password);
    if(password.length<8)
    {
      alert("set strong pwd")
    }
    else{
    alert(username + ' successfully registered');
    setRegistered(true);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
