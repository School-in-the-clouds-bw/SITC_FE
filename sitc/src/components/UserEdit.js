import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import DayList from './DayList';
import TimeList from './TimeList';

export default function UserEdit(props) {
  const [info, setInfo] = useState({
    id: Date.now(),
    country: "",
    dayAvailable: "",
    timeAvailable: "",
  });
  const [expandCountry, setExpandCountry] = useState(false);
  const [expandDay, setExpandDay] = useState(false);
  const [expandTime, setExpandTime] = useState(false);
  
  const changeHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("", setInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setInfo({ country: "" });
  };
  const submitDay = e => {
    e.preventDefault();
    props.addDay(info)
    setInfo({ dayAvailable: "", id: Date.now()});
  };

  const submitTime = e => {
    e.preventDefault()
    props.addTime(info)
    setInfo({timeAvailable: "", id: Date.now()})
  }
  
  return (
    <>
      <div className="title">
        <h1>Edit Profile</h1>
      </div>
      <div className="sections">
        <h4>Country: </h4>
        {expandCountry && (
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter your Country"
                value={info.country}
                onChange={changeHandler}
              />
            </form>
            <button onClick={() => setExpandCountry(false)}>Cancel</button>
          </div>
        )}
        <button onClick={() => setExpandCountry(true)}>Edit Country</button>
        
      </div>
      <div className="sections">
        <h4>Day(s) Available: </h4>
        {expandDay && (
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <label>Days Available</label>
              <select
                name="dayAvailable"
                value={info.dayAvailable}
                onChange={changeHandler}
              >
                <option value="" diabled={true}>
                  Select day of Week
                </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
              
              <button onClick={submitDay}>Add</button>
              <DayList addNewDay={props.addNewDay} />
            </form>
            <button onClick={() => setExpandDay(false)}>Cancel</button>
          </div>
        )}
        <button onClick={() => setExpandDay(true)}>Change Day</button>
      </div>
      <div className="sections">
        <h4>Time(s) Available: </h4>
        {expandTime && (
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <label>Time Available</label>
              <input
                type="text"
                name="timeAvailable"
                placeholder="Enter time ex:(1:00pm-2pm)"
                value={info.timeAvailable}
                onChange={changeHandler}
              />
              <button onClick={submitTime}>Add</button>
              <TimeList addNewTime={props.addNewTime} />
            </form>
            <button onClick={() => setExpandTime(false)}>Cancel</button>
          </div>
        )}
        <button onClick={() => setExpandTime(true)}>Set Time</button>
      </div>
      <button onClick={handleSubmit}>Update Profile</button>
    </>
  );
}
