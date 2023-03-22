import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%; 
    height: ${props => props.sizing}%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    background-color: rgba(85, 134, 229, 1);
    border: 2px solid black;
    border-radius: 5px 5px 0px 0px;
`;

function Rectangle({porcentaje}) {
    return ( 
        <StyledDiv sizing={porcentaje}>{porcentaje}%</StyledDiv>
     );
}

export default Rectangle;