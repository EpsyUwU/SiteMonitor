import React from 'react'

const StyledFigure = styled.figure`
    height: 100%;
    width: 100%;
    clip-path: polygon(0 100%, 0 0, 100% 100%);
    background: linear-gradient(180deg, rgba(112, 169, 255, 0) 0%, #70A9FF 56.77%);
    border: 1px solid #1775BB;
    border-radius: 28.3843px;
    transform: rotate(-180deg);
`;

function Porcentaje() {
  return (
    <div className="row justify-content-center">
            <div className="col-1">
                <StyledFigure />
            </div>
            <div className="col-10">

            </div>
    </div>
  )
}

export default Porcentaje