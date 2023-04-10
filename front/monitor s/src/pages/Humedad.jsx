import React, { useState } from 'react'
import Titulo from '../base/Titulo'
import MinMaxH from '../components/MinMaxH'
import VistaHumedad from '../components/VistaHumedad'

function Humedad() {

    const [hum,setHum] = useState(0)
    const [humAr,setHumAr] = useState([]);

    setInterval(actualizar,1000)

    function actualizar(){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        };

       fetch(`https://monitors.hopto.org:3000/api/monitors/TyH/all_registros`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const ola = result.TyH.pop()
            let dato = []

            setHum(ola.temperatura)

            for (let i = 0; i < 10; i++) {
              const ola10 = result.TyH.pop()
              dato.push(ola10.temperatura);
            }
            setHumAr(dato)
        })
        .catch(error => console.log('error', error)); 
    }
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
              <MinMaxH arrHum={humAr} />
            </div>
          </div>
        </div>
        <div className="col-6 m2">
          <VistaHumedad humed={hum} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Humedad