import React from 'react'
import styled from 'styled-components';

const StyledA = styled.a`
    width: 100%;
    height: auto;
    border: 1px solid rgba(119, 174, 224, 1);
    background: rgba(119, 174, 224, 1);
`;


function ButtonRegistro({type,url}){
    return(
        <StyledA type={type} href={url}/>
    )
}
export default ButtonRegistro