import React from "react";
import VolunteerDash from "./components/VolunteerDash";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import NewUserEdit from './components/NewUserEdit';
import UserEdit from "./components/UserEdit";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import EditTask from "./components/EditTask";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import styled from "styled-components";
import StudentDash from "./components/StudentDash";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;

`;

  background-color:#ccffe5;
  padding-left: 32%;
`


function App() {
  
  return (
    <div className="App">
      <Router>
        <StyledNav>

          <h1>Welcome to School In The Clouds</h1>

          <Link to="/login">Login</Link>
          <Link to="/signUp">Sign Up</Link>
          <Link to="/adminDashboard">Admin Dashboard</Link>
          <Link to="/volunteerDash">Volunteer Dashboard</Link>
          <Link to="/userEdit">Volunteer Edit Profile</Link>
          <Link to="/editTask">Edit Task</Link>
          <Link to="/studentDashboard">Student Dashboard</Link>
        </StyledNav>

        <Switch>
          <PrivateRoute exact path="/volunteerDash" component={VolunteerDash} />
          <PrivateRoute
            exact
            path="/userEdit/:id"
            component={UserEdit}
          />

          <PrivateRoute
            exact
            path="/adminDash"
            component={AdminDashboard}
          />
          <PrivateRoute exact path="/studentDash" component={StudentDash} />
          <PrivateRoute exact path="/editTask" component={EditTask} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
