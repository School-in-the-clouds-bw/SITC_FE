import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  width: 100px;
  padding: 6px;
  background-color: #e3a69f;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 5%;
  height: 35px;

  &:hover {
    filter: brightness(1.2);
  }
`;

const Days = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 18%;
  margin-right: 30%;
  margin-top: 2%;
`;
const Paragraph = styled.p`
  height: 16px;
  padding: 3%;
`;

export default function DayList(props) {
  return (
    <div>
      {props.addNewDay &&
        props.addNewDay.map((days) => (
          <Days key={days.id}>
            <Paragraph>Day Selected: {days.daysAvailable}</Paragraph>
            <DeleteButton>Delete</DeleteButton>
          </Days>
        ))}
    </div>
  );
}
