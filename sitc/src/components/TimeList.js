import React from "react";

import styled from 'styled-components';

const DeleteButton = styled.button`
  width: 100px;
  padding: 6px;
  background-color: #E3A69F;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 4.7%;
  height: 35px;
  

  &:hover {
    filter:brightness(1.20);
  }
`;

const Times = styled.div `
display: flex;
justify-content: space-evenly;
margin-left: 15%;
margin-right: 20%;
margin-top: 2%;
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
            <DeleteButton>Delete</DeleteButton>
          </Times>
        ))}
    </div>
  );
}
