import React from 'react'
import styled from 'styled-components'
import ListaHumedades from './ListaHumedades';

const StyledBox = styled.div`
  background-color: #d5e6ff;
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  display:flex;
`;
const StyledText = styled.p`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 90%;
  color: #1775BB;
`;
const Overow=styled.div`
  overflow: auto;
  height: 70%;
`;
const StyledShortBar=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const Colors=styled.div`
  display: flex;
  justify-content: center;
`;
const StyledColorBox=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  text-align: center;
`;
const StyledGraff=styled.div`
  align-items: center;
  
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


function MinMaxH({arrHum}) {
  let datos = arrHum

  return (
    <StyledBox className='row'>
      
        {/*Div de los estados */}
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
        {/*Div de los colores de estado*/}
        <>
          <StyledTR></StyledTR><StyledTA></StyledTA>
        </>
        {/*Div de significados */}
        <StyledGraff className="row">
            <div className="col-8">
              <StyledText>Humedad representada en barras</StyledText>
            </div>
            <div className="col-2">
              <StyledText>Estado</StyledText>
            </div>
            <div className="col-2">
              <StyledText>Porcentaje</StyledText>
            </div>
          </StyledGraff>
        {/*Div de la lista */}
      <Overow>
        {datos.map((dato) =>
          <StyledGraff className="row" key={dato.id}>
            <div className="col-8">
              <ListaHumedades data={dato}/>
            </div>
            <Colors className="col-2">
              {/*{dato}* */}
              <StyledColorBox>{dato}</StyledColorBox>
            </Colors>
            <div className="col-2">
              <StyledShortBar>{dato}%</StyledShortBar>
            </div>
          </StyledGraff>
        )}
      </Overow>
    </StyledBox>
  )
}

export default MinMaxH