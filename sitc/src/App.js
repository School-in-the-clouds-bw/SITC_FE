import React, { useState } from "react";
import VolunteerDash from "./components/VolunteerDash";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import UserEdit from "./components/UserEdit";

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
        {/* <VolunteerDash /> */}
        <UserEdit addDay={addDay} addNewDay={addNewDay} addTime={addTime} addNewTime={addNewTime} addCountry={addCountry} addNewCountry={addNewCountry}/>
        {/* <Route exact path="/editprofile" component={UserEdit}/> */}
      </Router>

      {/* <Login />
      <AdminDashboard /> */}
    </div>
  );
}

export default App;
