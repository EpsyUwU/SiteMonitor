import React, { useState } from "react";
import AnyChart from 'anychart-react'




export default function Grafica(){

    const data = [
        ['p1', 5, 4],
        ['p2', 6, 2],
        ['p3', 3, 7],
        ['p4', 1, 5],
        ['P5', 4, 8]]

// Also you can set data as array or object
// As array
/*const data = [
  ['p1', 5, 4],
  ['p2', 6, 2],
  ['p3', 3, 7],
  ['p4', 1, 5]
];*/


// As object
/*
const data = [
  {x: 'p1', value1: 5, value2: 4},
  {x: 'p2', value1: 6, value2: 2},
  {x: 'p3', value1: 3, value2: 7},
  {x: 'p4', value1: 1, value2: 5}
];*/
    return (
        <div className="container-fluid text-center d-flex justify-content-center">

           <div className="card-group w-50  align-items-center">
               <div className="card border-light mb-3 align-items-center " >
                   <div className="card-body">
                       <AnyChart type="column" width={800} height={300} legend={true} data={data}/>
                   </div>
               </div>
           </div>

       </div>
    )
}