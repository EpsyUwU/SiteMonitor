import React from 'react'
import styled from 'styled-components'
import Titulo from '../base/Titulo'

const StyledMedida = styled.div`
  width: 100%;
  height: 50%;
  background-color: #D5E6FF;
  border: 2px solid #1775BB;
  border-radius: 10px;
`;

const StyledMed = styled.div`
  width: 2%;
  height: 100%;
  margin-left: ${props => props.rango/98}%;
  background-color: #141213;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
`;

const StyledTR = styled.div`
  width: 100%;
  height: 2vh;
  background-color: #db1c3c;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
`;

const StyledTA = styled.div`
  width: 100%;
  height: 2vh;
  background-color: #1c3cdb;
  clip-path: polygon(0 100%, 0 0, 100% 100%);
`;

function MinMaxT() {

  let dato = 20 
  return (
    <>
    <div className="row h100">
      <div className="col-10">
        <div className="row">
          <Titulo text="Temperatura" />
        </div>
        <div className="row h30">
          <StyledMedida className='m2'>
            <StyledMed rango={dato*90}></StyledMed>
          </StyledMedida>
        </div>
        <div className="row">
          <StyledTR/>
          <StyledTA/>
        </div>
      </div>
    </div>
    </>
  )
}

export default MinMaxT