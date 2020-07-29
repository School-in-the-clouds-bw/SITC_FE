import React, { useState } from "react";
import VolunteerDash from "./components/VolunteerDash";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import UserEdit from "./components/UserEdit";

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NewUserEdit from './components/NewUserEdit';
import UserEdit from './components/UserEdit'

import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard';
import EditTask from './components/EditTask';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';


import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [addNewDay, setAddNewDay] = useState([]) 
  const [addNewTime, setAddNewTime] = useState([])

  const addDay = (newDay) => {
    setAddNewDay([...addNewDay, newDay]);
  };

  const addTime =(newTime) => {
    setAddNewTime([...addNewTime, newTime])
  }
  return (
    <div className="App">
      <Router>

        <VolunteerDash />
        <UserEdit addDay={addDay} addNewDay={addNewDay} addTime={addTime} addNewTime={addNewTime}/>
        {/* <Route exact path="/editprofile" component={UserEdit}/> */}
      </Router>

      <Login />
      <AdminDashboard />

        <h1>Welcome to School In The Clouds</h1>
     {/* <VolunteerDash/>
      <NewUserEdit/>
     <UserEdit/> */}
      <Link to='/login'>Login</Link>
      <Link  to='/signUp'>Sign Up</Link>
      {/*<AdminDashboard />
      <EditTask /> */}

      <Switch>
        <PrivateRoute exact path='/volunteerDash' component={ VolunteerDash} />
        <PrivateRoute exact path='/newUserEdit' component={ NewUserEdit} />
        <PrivateRoute exact path='/userEdit' component={ UserEdit} />
        <PrivateRoute exact path='/adminDashboard' component={ AdminDashboard} />
        <PrivateRoute exact path='/editTask' component={ EditTask } />
        <Route path='/login' component={Login} />
        <Route path='/signUp' component={ SignUp } />
      </Switch>
      </Router>

     


    </div>
  );
}

export default App;
