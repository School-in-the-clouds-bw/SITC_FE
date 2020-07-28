import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Headings = styled.div`
  text-align: left;
  margin-left: 2%;
`;
const HeadingsPro = styled.div`
  text-align: left;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
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
const CardsProfile = styled.div`
  margin: 1%;
  box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12),
    0 5px 2px rgba(104, 113, 88, 0.24);
  border-radius: 8px;
  width: 80;
  padding: 2%;
  background-color: #9fe2bf;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 140px;
  padding: 8px;
  background-color: #9fe2bf;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-top: 2%;

  &:hover {
    filter:brightness(1.20);
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

export default function VolunteerDash() {
  return (
    <Container>
      <div className="title">
        <h1>Hello User</h1>
      </div>
      <Headings>
        <h2>Tasks</h2>
      </Headings>
      <Cards>
        <Lists>
          <h4>Task Name</h4>
          <h4>Task Description</h4>
        </Lists>
        <Descriptions>
          <p></p>
          <p></p>
        </Descriptions>
      </Cards>
      <HeadingsPro>
        <h2>Profile</h2>
        <Link to={"/editprofile"}>
          <Button>Edit Profile</Button>
        </Link>
      </HeadingsPro>
      <CardsProfile>
        <h4>Country:</h4>
        <h4>Days Available: </h4>
        <h4>Times Available: </h4>
      </CardsProfile>
    </Container>
  );
}
