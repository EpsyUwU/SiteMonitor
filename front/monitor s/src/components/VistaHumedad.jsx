import React, { useState } from "react";
import AnyChart from 'anychart-react';




function VistaHumedad({humed}) {

  const variable = humed;
  
  const complexSettings = {
    width: 600,
    height: 500,
    type: 'column',
    data: [variable] ,
    title: [variable]+'%',
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
           <div className="card border-light align-items-center " >
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

export default VistaHumedad