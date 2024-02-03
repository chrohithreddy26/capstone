import React from 'react';
import './Dashboard.css';
const Dashboard = ({ username }) => {
  return (
    <div >
      <h2>Welcome, {username}!</h2>
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;
