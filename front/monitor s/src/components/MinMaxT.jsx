import React from 'react'
import styled from 'styled-components'
import Titulo from '../base/Titulo'

const StyledMedida = styled.div`
  width: 100%;
  height: 100%;
  background-color: #D5E6FF;
  border: 2px solid #1775BB;
  border-radius: 10px;
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
  return (
    <>
    <div className="row h100">
      <div className="col-10">
        <div className="row">
          <Titulo text="Temperatura" />
        </div>
        <div className="row h30">
          <StyledMedida></StyledMedida>
        </div>
        <div className="row m2">
          <StyledTR/>
          <StyledTA/>
        </div>
        <div className="row justify-content-end h30 m2">
          <div className="col-6">
            <StyledMedida className='row'>
              <div className="col-2">
                <p className='swich'>1m</p>
              </div>
              <div className="col-8">
                
              </div>
              <div className="col-2">
                <p className='swich'>5m</p>
              </div>
            </StyledMedida>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MinMaxT