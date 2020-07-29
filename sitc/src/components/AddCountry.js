import React from "react";

import styled from 'styled-components';

const DeleteButton = styled.button`
  width: 100px;
  padding: 6px;
  background-color: #E3A69F;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 4.5%;
  height: 35px;

  

  &:hover {
    filter:brightness(1.20);
  }
`;

const Country = styled.div `
display: flex;
justify-content: space-evenly;
margin-left: 15%;
margin-right: 30%;
margin-top: 2%;
`

const Paragraph = styled.p `
height: 12px;
padding: 3%;
max-width: 100px;
`

export default function AddCountry(props) {
  return (
    <div>
      {props.addNewCountry &&
        props.addNewCountry.map((countries) => (
          <Country key={countries.id}>
            <Paragraph>Country: {countries.country}</Paragraph>
            <DeleteButton>Delete</DeleteButton>
          </Country>
        ))}
    </div>
  );
}
