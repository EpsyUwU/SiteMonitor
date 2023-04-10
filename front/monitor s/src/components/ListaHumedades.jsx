import React from "react";
import styled from "styled-components";
import ProgressBars from "../base/ProgressBars";
import InsulatedHumidValues from "../base/InsulatedHumidValues"

const StyledLargeBar=styled.div`
  background-color: rgba(85, 134, 229, 0.29);
  border: solid 3px #d5e6ff;
  border-radius: 10px;
  height: 100%;
  align-content: flex-start;
  margin-left: 0;
  padding: 0;
  `;

function ListaHumedades({data}) {
    return (
        <>
            <StyledLargeBar><InsulatedHumidValues dato={data}/></StyledLargeBar>
        </>
    );
}

export default ListaHumedades;