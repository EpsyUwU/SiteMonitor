import styled from "styled-components";

const StyledLargeSInsideBar=styled.div`
  background-color: #5586E5;
  border-radius: 6px;
  height: 100%;
  width: ${props => props.long}%;
  `;
function ProgressBars({values}){
  return( 
  <StyledLargeSInsideBar long={values}>.</StyledLargeSInsideBar>
  )
}
export default ProgressBars