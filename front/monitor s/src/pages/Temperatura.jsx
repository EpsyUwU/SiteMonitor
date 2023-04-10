import React, {useState, useEffect} from 'react'
import VistaTemperatura from '../components/VistaTemperatura'
import MinMaxT from '../components/MinMaxT'
import Grafica from '../components/Grafica'
import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient = null; //variable donde se guarda la conexion del websocket

function Temperatura() {
  const [temp,setTemp] = useState(0)
  const [tempAr,setTempAr] = useState([]);

    const URI = "http://localhost:8080" // URI de la API GATEWAT

    const connect = () => { // esta funcion conecta al websocket
        let sock = new SockJS(URI + "/ws");
        stompClient = over(sock); // aqui se guarda la conexioon en una variable
        stompClient.connect({}, onConnected, onerror); //aqui se conecta
    };

    const onerror = (e) => {
        console.log(e)
    }
  
    const onConnected = () => { // esta funcion avisa cuando se conecto al websocket
        console.log("[INFO] - stomp conected");
        stompClient.subscribe("/response/xd/private/user" , returned);
    };

    const returned = (payload) => {
        let payloadData = JSON.parse(payload.body);
        setTemp(payloadData.data.temperatura)

        let dato = []
        dato.push(payloadData.data.temperatura)
        setTempAr(dato)
    }

    useEffect(() => {
      connect();
    }, [])

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