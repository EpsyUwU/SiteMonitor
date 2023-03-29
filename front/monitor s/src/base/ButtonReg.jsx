import React from 'react'
import styled from 'styled-components';

const Styledbutton = styled.button`
    width: 100%;
    font-family: 'Fira Code';
    font-size: 2rem;
    text-align: center;
    height: auto;
    border: 1px solid rgba(119, 174, 224, 1);
    border-radius: 10px;
    background: rgba(119, 174, 224, 1);
    margin-top: 5%;
`;


function ButtonReg(){
    return(
        <Styledbutton>Registro</Styledbutton>
    )
}
export default ButtonReg