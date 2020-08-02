import React, { useState } from "react";
import VolunteerDash from "./components/VolunteerDash";
import "./App.css";

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
<<<<<<< HEAD
=======
// import NewUserEdit from './components/NewUserEdit';
>>>>>>> 7c0bea23b0efccb7dbd971ebe3b70148efa8ce0e
import UserEdit from './components/UserEdit'

import EditTask from './components/EditTask';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import styled from 'styled-components';
import StudentDash from './components/StudentDash';


const StyledNav = styled.div `
  display:flex;
  justify-content: space-around;
`

function App() {
  const [addNewDay, setAddNewDay] = useState([]) 
  const [addNewTime, setAddNewTime] = useState([])
  const [addNewCountry, setAddNewCountry ] = useState([])

  const addDay = (newDay) => {
    setAddNewDay([...addNewDay, newDay]);
  };

  const addTime =(newTime) => {
    setAddNewTime([...addNewTime, newTime])
  }

<<<<<<< HEAD
        <VolunteerDash />
        <UserEdit addDay={addDay} addNewDay={addNewDay} addTime={addTime} addNewTime={addNewTime}/>
        {/* <Route exact path="/editprofile" component={UserEdit}/> */}
=======
const addCountry= (newCountry) => {
>>>>>>> 7c0bea23b0efccb7dbd971ebe3b70148efa8ce0e

 setAddNewCountry([...addNewCountry, newCountry])
}

  return (
    <div className="App">
      <Router>
        <StyledNav>
        <h1>Welcome to School In The Clouds</h1>
     
        <Link to='/login'>Login</Link>
        <Link  to='/signUp'>Sign Up</Link>
        <Link to='/adminDashboard'>Admin Dashboard</Link>
        <Link to='/volunteerDash'>Volunteer Dashboard</Link>
        <Link to='/userEdit'>Volunteer Edit Profile</Link>
        <Link to='/editTask'>Edit Task</Link>
        <Link to='/studentDashboard'>Student Dashboard</Link>
      </StyledNav>

      <Switch>
        <PrivateRoute exact path='/volunteerDash' component={ VolunteerDash} />
<<<<<<< HEAD
=======
        {/* <PrivateRoute exact path='/newUserEdit' component={ NewUserEdit} /> */}
>>>>>>> 7c0bea23b0efccb7dbd971ebe3b70148efa8ce0e
        <PrivateRoute exact path='/userEdit' component={ UserEdit} />
        <PrivateRoute exact path='/adminDashboard' component={ AdminDashboard} />
        <PrivateRoute exact path='/studentDashboard' component={ StudentDash} />
        <PrivateRoute exact path='/editTask' component={ EditTask } />
          <PrivateRoute
          exact
          path="/userEdit:id"
          component={() => (
            <UserEdit
              addDay={addDay}
              addNewDay={addNewDay}
              addTime={addTime}
              addNewTime={addNewTime}
              addCountry={addCountry}
              addNewCountry={addNewCountry}
            />
          )}
        />
        <Route path='/login' component={Login} />
        <Route path='/signUp' component={ SignUp } />
      </Switch>
      </Router>

     


    </div>
  );
}

export default App;
