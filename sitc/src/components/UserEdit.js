import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import DayList from "./DayList";
import TimeList from "./TimeList";
import styled from "styled-components";
import AddCountry from "./AddCountry";
import {useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  margin-bottom: 2%;
`;

const Forms = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 1%;
`;

const Cards = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  width: 80;
  padding: 3%;
  background-color: #9fe2bf;
`;
const Button = styled.button`
  width: 150px;
  padding: 8px;
  background-color: #e3a69f;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  height: 40px;

  &:hover {
    filter: brightness(1.2);
  }
`;

const AddButton = styled.button`
  width: 60px;
  padding: 11px;
  background-color: #e3a69f;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  margin-bottom: 3%;
  height: 50px;

  &:hover {
    filter: brightness(1.2);
  }
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 11px;
  background-color: #e3a69f;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  margin-bottom: 3%;
  height: 50px;

  &:hover {
    filter: brightness(1.2);
  }
`;
const Label = styled.label`
  text-align: center;
  width: 38rem;
  font-size: 1.2rem;
`;
const Input = styled.input`
  width: 220px;
  padding: 8px 26px;
  margin: 8.5px;
  border: 1px solid #e3a69f;
  border-radius: 4px;
  font-size: 1rem;
`;
const InputTime = styled.input`
  width: 220px;
  padding: 8px 26px;
  margin: 8.5px;
  border: 1px solid #e3a69f;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 270px;
  padding: 8px 26px;
  margin: 8.5px;
  border: 1px solid #e3a69f;
  border-radius: 4px;
  font-size: 1rem;
`;
const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20%;
`;

const CancelAdd = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30%;
  margin-right: 42%;
`;

const CancelAdd1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 25%;
  margin-right: 47%;
`;

const CancelAdd2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 24%;
  margin-right: 48%;
`;

export default function UserEdit(props) {
  const [info, setInfo] = useState({
    country: "",
    daysAvailable: "",
    timeAvailable: "",
  });
  const [expandCountry, setExpandCountry] = useState(false);
  const [expandDay, setExpandDay] = useState(false);
  const [expandTime, setExpandTime] = useState(false);

  const { push } = useHistory();
  const id = window.localStorage.getItem("id");

  const changeHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://school-in-the-cloud-be.herokuapp.com/api/auth/users/${id}`,
        info
      )
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
        push("/volunteerDash");
      })
      .catch((err) => console.log(err));
  };
  const submitDay = (e) => {
    e.preventDefault();
    props.addDay(info);
    setInfo({ daysAvailable: "" });
  };

  const submitTime = (e) => {
    e.preventDefault();
    props.addTime(info);
    setInfo({ timeAvailable: "" });
  };

  const submitCountry = (e) => {
    e.preventDefault();
    props.addCountry(info);
    setInfo({ country: "" });
  };

  return (
    <>
      <Container>
        <div className="title">
          <h1>Edit Profile</h1>
        </div>
        <Cards>
          <Forms onSubmit={handleSubmit}>
            <Sections>
            <h4>Country: </h4>
            {expandCountry && (
              <FormContainer>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter your Country"
                  value={info.country}
                  onChange={changeHandler}
                />
                <CancelAdd>
                  <AddButton onClick={submitCountry}>Add</AddButton>
                  <CancelButton onClick={() => setExpandCountry(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd>
              </FormContainer>
            )}
            <p>Stuff</p>
            <AddCountry addNewCountry={props.addNewCountry} />
            <Button onClick={() => setExpandCountry(true)}>Edit Country</Button>
            </Sections>
            <Sections>
            <h4>Day(s) Available: </h4>
            {expandDay && (
              <FormContainer>
                <Label>Days Available: </Label>
                <Select
                  name="daysAvailable"
                  value={info.daysAvailable}
                  onChange={changeHandler}
                >
                  <option value="" disabled={true}>
                    Select day of Week
                  </option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </Select>
                <CancelAdd1>
                  <AddButton onClick={submitDay}>Add</AddButton>

                  <CancelButton onClick={() => setExpandDay(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd1>
              </FormContainer>
            )}
            <DayList addNewDay={props.addNewDay} />
            <Button onClick={() => setExpandDay(true)}>Change Day</Button>
            </Sections>
            <Sections>
            <h4>Time(s) Available: </h4>
            {expandTime && (
              <FormContainer>
                <Label>Time Available: </Label>
                <InputTime
                  type="text"
                  name="timeAvailable"
                  placeholder="Enter time ex:(1:00pm-2pm)"
                  value={info.timeAvailable}
                  onChange={changeHandler}
                />
                <CancelAdd2>
                  <AddButton onClick={submitTime}>Add</AddButton>
                  <CancelButton onClick={() => setExpandTime(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd2>
              </FormContainer>
            )}
            <TimeList addNewTime={props.addNewTime} />
            <Button onClick={() => setExpandTime(true)}>Set Time</Button>
            </Sections>
          </Forms>
        </Cards>
        <Button type="submit" onClick={handleSubmit}>
          Update Profile
        </Button>
      </Container>
    </>
  );
}
