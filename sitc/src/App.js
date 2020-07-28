import React from 'react';
import VolunteerDash from './components/VolunteerDash';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserEdit from './components/UserEdit'

import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <div className="App">

      <Router>
      <VolunteerDash/>
      <UserEdit/>
      {/* <Route exact path="/editprofile" component={UserEdit}/> */}
      </Router>

      <Login />
      <AdminDashboard />

    </div>
  );
}

export default App;
