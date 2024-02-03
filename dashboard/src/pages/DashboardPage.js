import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = ({ username }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Dashboard username={username} />
    </div>
  );
};

export default DashboardPage;
