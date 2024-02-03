// LoginForm.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic, e.g., make an API request
    onLogin(username, password);
    
  if (username.trim() === '') {
    alert('Please Enter Username');
  }
  else if (password.trim() === '') {
    alert('Please Enter Password');
  }
   else{setLoggedIn(true);
  }
};

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default LoginForm;
