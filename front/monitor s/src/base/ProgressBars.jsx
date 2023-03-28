import React from "react";
import styled from "styled-components";

const StyledLargeSInsideBar=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
    border: 1px solid black;

  border-radius: 10px;
  height: 100%;
  width: ${props => props.ancho};
  `;
function ProgressBars(){
  <>
    <StyledLargeSInsideBar>like proggressbar</StyledLargeSInsideBar>
  </>
    

}
export default ProgressBars