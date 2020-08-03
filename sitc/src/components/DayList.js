import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  width: 100px;
  padding: 6px;
  background-color: #ccffe5;
  border: 1px solid #96534b;
  color: #96534b;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 5%;
  height: 35px;

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;

const Days = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  
`;
const Paragraph = styled.p`
  height: 16px;
  padding: 3%;
`;

export default function DayList(props) {

  return (
    <div>
      {props.addNewDay &&
        props.addNewDay.map((days, key) => (
          <Days key={key}>
            <Paragraph>Day Selected: {days.daysAvailable}</Paragraph>
            <DeleteButton type="button">Delete</DeleteButton>
          </Days>
        ))}
    </div>
  );
}
