import React from 'react'
import Titulo from '../base/Titulo'
import MinMaxH from '../components/MinMaxH'
import VistaHumedad from '../components/VistaHumedad'

function Humedad() {
  return (
    <>
    <div className="container-fluid ht">
      <div className="row">
        <div className="col-6 m5">
          <div className="row">
            <Titulo text="Humedad"></Titulo>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 box1">
              <MinMaxH />
            </div>
          </div>
        </div>
        <div className="col-6 m2">
          <VistaHumedad />
        </div>
      </div>
6    </div>
    </>
  )
}

export default Humedad