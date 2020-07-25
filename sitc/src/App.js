import React from 'react';
import VolunteerDash from './components/VolunteerDash';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <VolunteerDash/>
      </Router>
    </div>
  );
}

export default App;
