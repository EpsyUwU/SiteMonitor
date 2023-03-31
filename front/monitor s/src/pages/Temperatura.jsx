import React, {useState} from 'react'
import VistaTemperatura from '../components/VistaTemperatura'
import MinMaxT from '../components/MinMaxT'
import Grafica from '../components/Grafica'

function Temperatura() {
  const [temp,setTemp] = useState(0)
  const [tempAr,setTempAr] = useState([]);

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

          setTemp(ola.humedad)

          for (let i = 0; i < 5; i++) {
            const ola10 = result.TyH.pop()
            dato.push(ola10.humedad);
          }
          setTempAr(dato)
      })
      .catch(error => console.log('error', error)); 
  }

  return (
    <>
      <div className="container-fluid ht">
        <div className="row hq">
          <div className="col-5 m2">
              <VistaTemperatura tempDat={temp}/>
          </div>
          <div className="col-7 m2">
              <MinMaxT tempDat={temp} />
          </div>
        </div>
        <div className="row justify-content-center hq m2">
          <div className="col-10 m5">
              <Grafica arrTemp={tempAr}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Temperatura