import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import DayList from './DayList';
import TimeList from './TimeList';
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  padding: 8px;
  background-color: #9fe2bf;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;

  &:hover {
    filter:brightness(1.20);
  }
`;

const Label = styled.label `
    margin-bottom: -34px;
    text-align: left;
    width: 38rem;
    font-size: 2rem;
    
`
const Input = styled.input `
    width: 200px;
    padding: 8px 26px;
    margin: 8.5px;
    border: 1px solid #E3A69F;
    border-radius: 4px;
    font-size: 1.2rem;
`
const InputTime = styled.input `
    width: 250px;
    padding: 8px 26px;
    margin: 8.5px;
    border: 1px solid #E3A69F;
    border-radius: 4px;
    font-size: 1.2rem;
`

const Select = styled.select `
    width: 260px;
    padding: 8px 26px;
    margin: 8.5px;
    border: 1px solid #E3A69F;
    border-radius: 4px;
    font-size: 1.3rem;
`

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
              <Label>Country: </Label>
              <Input
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
        <Button onClick={() => setExpandCountry(true)}>Edit Country</Button>
        
      </div>
      <div className="sections">
        <h4>Day(s) Available: </h4>
        {expandDay && (
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <Label>Days Available: </Label>
              <Select
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
              </Select>
              
              <button onClick={submitDay}>Add</button>
              <DayList addNewDay={props.addNewDay} />
            </form>
            <button onClick={() => setExpandDay(false)}>Cancel</button>
          </div>
        )}
        <Button onClick={() => setExpandDay(true)}>Change Day</Button>
      </div>
      <div className="sections">
        <h4>Time(s) Available: </h4>
        {expandTime && (
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <Label>Time Available: </Label>
              <InputTime
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
        <Button onClick={() => setExpandTime(true)}>Set Time</Button>
      </div>
      <Button onClick={handleSubmit}>Update Profile</Button>
    </>
  );
}
