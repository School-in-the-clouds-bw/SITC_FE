import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";


import {getVolunteerTasks} from '../Actions/VolunteerActions';
import {connect} from 'react-redux';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  color: #96534b;
`;

const Headings = styled.div`
  text-align: left;
  margin-left: 2%;
  color: #96534b;
`;
const HeadingsPro = styled.div`
  text-align: left;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  color: #96534b;
  
`;

const Cards = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  
  padding: 3%;
  background-color: #ccffe5;
  color: #96534b;
`;

const CardsProfile = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  padding: 2%;
  background-color: #ccffe5;
  color: #96534b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 140px;
  padding: 8px;
  background-color: #ccffe5;
  border: 1px solid #96534b;
  color: #96534b;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-top: 2%;

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;

const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40%;
`;
const Descriptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40%;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-left: 2%;
`;

const VolunteerDash = ({getVolunteerTasks, tasks}) => {

  const id = window.localStorage.getItem("id")
  const username = window.localStorage.getItem('username')

  const [seeProfile, setSeeProfile] = useState({})

  useEffect(() => {
    getVolunteerTasks();
  }, [])

  useEffect(() => {
    const getProfile = () => {
      axiosWithAuth()
      .get(`https://school-in-the-cloud-be.herokuapp.com/api/auth/users/${id}`)
      .then(res => {
        setSeeProfile({
          ...res.data
        })
      })
      .catch(err => console.log(err))
    }
    getProfile()
  }, [id])
  return (
    <Container>
      <Title>
        <h1>Hi {username}!</h1>
      </Title>
      <Headings>
        <h2>Tasks</h2>
      </Headings>
      <Cards>
        <Lists>
          <h4>Task Name</h4>
          <h4>Task Description</h4>
        </Lists>

        {tasks && tasks.map((task, key) => {
          return (
            <>
              
              <Descriptions key={key}>
                <Paragraph>{task.taskName}</Paragraph>
                <Paragraph>{task.taskDescription}</Paragraph>
              </Descriptions>
            </>
          );
        })}
      </Cards>
      <HeadingsPro>
        <h2>Profile</h2>
        <Link to={`/userEdit/${id}`}>
          <Button>Edit Profile</Button>
        </Link>
      </HeadingsPro>
      <CardsProfile>
        <p>Country: {seeProfile.country}</p>
        <p>Days Available: {seeProfile.daysAvailable}</p>
        <p>Times Available: {seeProfile.timeAvailable} </p>
      </CardsProfile>
    </Container>
  );
}

const mapToStateProps = state => {
  console.log(state)
  return{
    tasks: state.tasks,
    isFetching: state.isFetching,
    error: state.error,
    didFetch: state.didFetch
  }
}
const mapDispatchToProps = {getVolunteerTasks}



export default connect(mapToStateProps, mapDispatchToProps) (VolunteerDash)