import React from "react";

import styled from 'styled-components';

const DeleteButton = styled.button`
  width: 100px;
  padding: 6px;
  background-color: #ccffe5;
  border: 1px solid  #96534b;
  color: #96534b;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 4.7%;
  height: 35px;
  

  &:hover {
    background-color: #96534b;
    color: #e3a69f;
    border-color: #96534b;
  }
`;

const Times = styled.div `
display: flex;
justify-content: space-evenly;
width: 500px;

`

const Paragraph = styled.p `
height: 12px;
padding: 3%;
`

export default function TimeList(props) {
  return (
    <div>
      {props.addNewTime &&
        props.addNewTime.map((times) => (
          <Times key={times.id}>
            <Paragraph>Time Added: {times.timeAvailable}</Paragraph>
            <DeleteButton type="button">Delete</DeleteButton>
          </Times>
        ))}
    </div>
  );
}
