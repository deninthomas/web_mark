import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to the Project Management System</h1>
      <button onClick={() => navigate('/admin/login')}>Admin Login</button>
      <button onClick={() => navigate('/mentor/login')}>Mentor Login</button>
    </div>
  );
}

export default HomePage;