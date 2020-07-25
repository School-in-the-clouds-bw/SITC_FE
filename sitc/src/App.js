import React from 'react';
import VolunteerDash from './components/VolunteerDash';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import NewUserEdit from './components/NewUserEdit';
import UserEdit from './components/UserEdit'

function App() {
  return (
    <div className="App">
      <Router>
      <VolunteerDash/>
      <NewUserEdit/>
      <UserEdit/>
      </Router>
    </div>
  );
}

export default App;
