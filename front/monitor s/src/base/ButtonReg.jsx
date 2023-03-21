import React from 'react'
import styled from 'styled-components';

const Styledbutton = styled.button`
    width: 100%;
    height: auto;
    border: 1px solid rgba(119, 174, 224, 1);
    background: rgba(119, 174, 224, 1);
`;


function ButtonReg(){
    return(
        
        <Styledbutton>Registro</Styledbutton>
    )
}
export default ButtonReg