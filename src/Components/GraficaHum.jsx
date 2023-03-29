import React, { useState } from "react";
import AnyChart from 'anychart-react';
import '../Assets/Grafica.css'

const variable = 60.00;


export default function GraficaHum(){



    const complexSettings = {
        width: 600,
        height: 500,
        type: 'column',
        data: [variable] ,
        title: 'Porcentaje de Humedad',
        yAxis: [1, {
            orientation: 'right',
            enabled: true
        }],
        legend: {
            background: 'lightgreen 2',
            padding: 0
        },
        lineMarker: {
            value: 60
        }
    };
    return (
        <div className="container-fluid text-center d-flex justify-content-center">

           <div className="card-group w-50  align-items-center">
               <div className="card border-light mb-3 align-items-center " >
                   <div className="card-header">Humedad</div>
                   <div className="card-body">
                       <AnyChart
                           {...complexSettings}
                       />
                   </div>
               </div>
           </div>

       </div>
    )
}