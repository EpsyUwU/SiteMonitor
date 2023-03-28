import React from 'react'
import VistaTemperatura from '../components/VistaTemperatura'
import MinMaxT from '../components/MinMaxT'
import Grafica from '../components/Grafica'

function Temperatura() {
  return (
    <>
      <div className="container-fluid ht">
        <div className="row hq">
          <div className="col-5 m2">
              <VistaTemperatura/>
          </div>
          <div className="col-7 m2">
              <MinMaxT/>
          </div>
        </div>
        <div className="row justify-content-center hq m2">
          <div className="col-10 m5">
              <Grafica/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Temperatura