import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function NewUserEdit() {
  const [info, setInfo] = useState({
    country: "",
    dayAvailable: "",
    timeAvailable: "",
  });
  
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
      setInfo({country: ""})
  };
  const addDayTime = (e) => {
    e.preventDefault();
    setInfo({dayAvailable:"", timeAvailable: ""})
    axiosWithAuth().post("", setInfo).then().catch();
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h1>Create Profile</h1>
          </div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your Country"
            value={info.country}
            onChange={changeHandler}
          />
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
          <button onClick={addDayTime}>Add</button>
          <label>Time Available</label>
          <input
            type="text"
            name="timeAvailable"
            placeholder="Enter time ex:(1:00pm-2pm)"
            value={info.timeAvailable}
            onChange={changeHandler}
          />
          <button onClick={addDayTime}>Add</button>
          <div className="button">
            <button>Update Profile</button>
          </div>
        </form>
      </div>
    </>
  );
}
