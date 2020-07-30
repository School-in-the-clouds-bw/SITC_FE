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

const Headings = styled.h4 `

`

const FormContainer = styled.div`
  margin-bottom: 2%;
  
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 32%;
  
`;
const FormSection1 = styled.div `
display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 1%;
`
const FormSection2 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: 31%;
`;

const FormSection3 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: 36%;
`;

const Title = styled.div `
color: #96534b;
`
const Cards = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  width: 80;
  padding: 3%;
  background-color: #ccffe5;
  color: #96534b;
`;
const Button = styled.button`
  width: 150px;
  padding: 8px;
  background-color: #ccffe5;
  color: #96534b;
  border: 1px solid  #96534b;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  height: 40px;

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;

const AddButton = styled.button`
  width: 60px;
  padding: 11px;
  background-color: #ccffe5;
  border: 1px solid  #96534b;
  color: #96534b;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  margin-bottom: 3%;
  height: 50px;

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 11px;
  background-color: #ccffe5;
  border: 1px solid  #96534b;
  color: #96534b;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 2%;
  margin-bottom: 3%;
  height: 50px;

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;
const Label = styled.label`
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
  margin-left: 20%;
  margin-right: 21%;
`;

const CancelAdd1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 35%;
`;

const CancelAdd2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 4%;
  margin-right: 37%;
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
    // setInfo({ daysAvailable: "" });
  };

  const submitTime = (e) => {
    e.preventDefault();
    props.addTime(info);
    // setInfo({ timeAvailable: "" });
  };

  const submitCountry = (e) => {
    e.preventDefault();
    props.addCountry(info);
    // setInfo({ country: "" });
  };

  console.log(info)
  return (
    <>
      <Container>
        <Title>
          <h1>Edit Profile</h1>
        </Title>
        <Cards>
          <Forms onSubmit={handleSubmit}>
            <Sections>
            <Headings>Country: </Headings>
            {expandCountry && (
              <FormContainer>
                <FormSection1>
                <Label>Country:</Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter your Country"
                  value={info.country}
                  onChange={changeHandler}
                />
                </FormSection1>
                <CancelAdd>
                  <AddButton type="button" onClick={submitCountry}>Add</AddButton>
                  <CancelButton onClick={() => setExpandCountry(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd>
              </FormContainer>
            )}
          
            <AddCountry addNewCountry={props.addNewCountry} />
            <Button type="button" onClick={() => setExpandCountry(true)}>Edit Country</Button>
            </Sections>
            <Sections>
            <Headings>Day(s) Available: </Headings>
            {expandDay && (
              <FormContainer>
                <FormSection2>
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
                </FormSection2>
                <CancelAdd1>
                  <AddButton type="button" onClick={submitDay}>Add</AddButton>

                  <CancelButton onClick={() => setExpandDay(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd1>
              </FormContainer>
            )}
            <DayList addNewDay={props.addNewDay} />
            <Button type="button" onClick={() => setExpandDay(true)}>Change Day</Button>
            </Sections>
            <Sections>
            <Headings>Time(s) Available: </Headings>
            {expandTime && (
              <FormContainer>
                <FormSection3>
                <Label>Time Available: </Label>
                <InputTime
                  type="text"
                  name="timeAvailable"
                  placeholder="Enter time ex:(1:00pm-2pm)"
                  value={info.timeAvailable}
                  onChange={changeHandler}
                />
                </FormSection3>
                <CancelAdd2>
                  <AddButton type="button" onClick={submitTime}>Add</AddButton>
                  <CancelButton onClick={() => setExpandTime(false)}>
                    Cancel
                  </CancelButton>
                </CancelAdd2>
              </FormContainer>
            )}
            <TimeList addNewTime={props.addNewTime} />
            <Button type="button" onClick={() => setExpandTime(true)}>Set Time</Button>
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
