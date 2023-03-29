import React from 'react'
import styled from 'styled-components'
import ListaHumedades from './ListaHumedades';

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
  align-content: flex-start;
  margin-left: 0;
  padding: 0;
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function MinMaxH() {
  let porcentaje = "param";
  let datos = []

  for (let i = 0; i < 5; i++) { // muestra 0, luego 1, luego 2
  datos.push(getRandomInt(40));
  }

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
      {datos.map((dato) =>
      <StyledGraff className="row" key={dato.id}>
        <div className="col-8">
          <ListaHumedades data={dato}/>
        </div>
        <div className="col-2">
          <StyledColorBox>{dato}</StyledColorBox>
        </div>
        <div className="col-2">
          <StyledShortBar>{dato}</StyledShortBar>
        </div>
      </StyledGraff>
      )}
    </StyledBox>
  )
}

export default MinMaxH