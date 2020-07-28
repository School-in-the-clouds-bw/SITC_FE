import React, {useState} from 'react';
import VolunteerDash from './components/VolunteerDash';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserEdit from './components/UserEdit'

import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard';


function App() {

  const [addNewDay, setAddNewDay] = useState([])

  const addDayTime = (e, day) => {
    e.preventDefault()
    const newDayTime = {
      day: day
    }
    setAddNewDay({
      addNewDay: [ addNewDay, newDayTime]
    })
  } 
  return (
    <div className="App">

      <Router>
      <VolunteerDash/>
      <UserEdit addDayTime={addDayTime}/>
      {/* <Route exact path="/editprofile" component={UserEdit}/> */}
      </Router>

      <Login />
      <AdminDashboard />

    </div>
  );
}

export default App;
