import React, { useState } from "react";
import VolunteerDash from "./components/VolunteerDash";
import "./App.css";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import UserEdit from './components/UserEdit'
import EditTask from './components/EditTask';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [addNewDay, setAddNewDay] = useState([]) 
  const [addNewTime, setAddNewTime] = useState([])

  const [addNewCountry, setAddNewCountry] = useState([])

  const addDay = (newDay) => {
    setAddNewDay([...addNewDay, newDay]);
  };

  const addTime =(newTime) => {
    setAddNewTime([...addNewTime, newTime])
  };

  const addCountry =(newCountry) => {
    setAddNewCountry([...addNewCountry, newCountry])
  }

  return (
    <div className="App">
      <Router>

        <VolunteerDash />
        <UserEdit addDay={addDay} addNewDay={addNewDay} addTime={addTime} addNewTime={addNewTime}/>
        {/* <Route exact path="/editprofile" component={UserEdit}/> */}
      
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
