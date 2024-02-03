// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Perform login logic, e.g., make an API request
    // Update user state if login is successful
    setUser({ username });
  };

  const handleRegister = (username, password) => {
    // Perform registration logic, e.g., make an API request
    // Update user state if registration is successful
    setUser({ username });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <DashboardPage username={user.username} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
