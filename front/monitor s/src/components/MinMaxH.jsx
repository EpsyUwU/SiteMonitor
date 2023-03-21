import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  background-color: #d5e6ff;
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
`;

const StyledText = styled.p`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 90%;

  color: #1775BB;
`;

function MinMaxH() {
  return (
    <StyledBox className='row'>
      <div className="row">

        
      </div>
      <div className="row">
        <div className="col-4">
          <StyledText>Excelente</StyledText>
        </div>
        <div className="col-4">
          <StyledText>Normal</StyledText>
        </div>
        <div className="col-4">
          <StyledText>Peligro</StyledText>
        </div>
      </div>
      <div className="row">
        
      </div>
    </StyledBox>
  )
}

export default MinMaxH