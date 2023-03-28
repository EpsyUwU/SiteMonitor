import React from 'react'
import styled from 'styled-components'
import ProgressBars from '../base/ProgressBars';


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
const StyledLargeBar=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  `;
const StyledShortBar=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const StyledColorBox=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  width: 25%;
  text-align: center;
`;
const StyledGraff=styled.div`
  align-items: center;
  height: 80%;
  overflow: auto
`;

function MinMaxH() {
  let porcentaje = "param";
  let reg=24;
  return (
    <StyledBox className='row'>
      <div className="row">space div</div>
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

      <StyledGraff className="row">
        <div className="col-8">
          {/** */}
          <div className="row">
            <StyledLargeBar>jhbyg</StyledLargeBar>
          </div>
        </div>
        <div className="col-2">
          <div className="row"><StyledColorBox>a</StyledColorBox></div>
        </div>
        <div className="col-2">
          <div className="row"><StyledShortBar>{porcentaje}</StyledShortBar></div>
        </div>
      </StyledGraff>
    </StyledBox>
  )
}

export default MinMaxH