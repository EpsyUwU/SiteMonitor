import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 100px;
    background-image: url('${props => props.background}');  
    background-repeat: no-repeat;
    background-size: 100% 100px;
    border: none;
`;




function Icon({background}) {
  return (
    <Button background={background} className="img-fluid"></Button>
  )
}

export default Icon
