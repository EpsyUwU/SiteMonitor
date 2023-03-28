import React from 'react'
import styled from 'styled-components'

const StyledCircle = styled.div`
  clip-path: circle(40% at 50% 50%);
  width: 100%;
  height: 40vh;
  background-color: #77AEE0;
`;

function VistaTemperatura() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <StyledCircle className='align-items-center row justify-content-center'>
            <div className="col-5 boxblue bor">
              <p className='temp'>28.5°C</p>
            </div>
          </StyledCircle>
        </div>
      </div>
    </>
  )
}

export default VistaTemperatura