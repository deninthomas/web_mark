import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import MentorLogin from './components/MentorLogin';
import AdminDashboard from './components/AdminDashboard';
import MentorDashboard from './components/MentorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/mentor/login" element={<MentorLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;