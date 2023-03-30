import React from 'react'
import styled from "styled-components";

const StyledTittle = styled.h1`
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: ${props => (props.color == 'Monitor S' ? 'black' : 'rgba(23, 117, 187, 1)')};
`;

function Titulo({text}) {
  return (
    <StyledTittle color={text} >{text}</StyledTittle>
  )
}

export default Titulo;