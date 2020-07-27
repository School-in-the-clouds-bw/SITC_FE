import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Login />
      <AdminDashboard />
    </div>
  );
}

export default App;
