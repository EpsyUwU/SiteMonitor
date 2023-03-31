import styled from "styled-components";

const StyledImg = styled.img`
   
`;

function Images({img}) {
    return ( 
        <StyledImg src={img} />
     );
}

export default Images;