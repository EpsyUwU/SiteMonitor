import React from 'react'
import styled from 'styled-components';

const StyledFigure = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(0 100%, 0 0, 100% 100%);
  background: linear-gradient(180deg, rgba(112, 169, 255, 0) 0%, #70A9FF 56.77%);
  border: 1px solid #1775BB;
    
`;

const StyledBox = styled.div`
  background-color: #d5e6ff;
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
`;

function VistaHumedad() {
  return (
    <div className="row justify-content-center hf">
      <div className="col-1">
        <StyledFigure>.</StyledFigure>
      </div>
      <div className="col-10 box2">
        <StyledBox className='row'>
          <div className="row">

          </div>
        </StyledBox>
      </div>
    </div>
  )
}

export default VistaHumedad