import React from 'react'
import styled from "styled-components"

const StyledData = styled.div`
    width: 100%;
    font-family: 'Fira Code';
    font-weight: bolder;
    font-size: 2rem;
    text-align: center;
    background: rgba(171, 205, 255, 0.5);
    border: 1px solid rgba(171, 205, 255, 0.5);
    border-radius: 10px;
    margin-top: 5%;
`;
function Datos({data}){
    return(
        <StyledData> {data} </StyledData>
    )

}
export default Datos