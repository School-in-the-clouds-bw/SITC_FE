import React from "react";

import styled from 'styled-components';



const Country = styled.div `

width: 200px;
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
          </Country>
        ))}
    </div>
  );
}
