import React, { useState , useEffect} from 'react'
import Titulo from '../base/Titulo'
import MinMaxH from '../components/MinMaxH'
import VistaHumedad from '../components/VistaHumedad'
import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient = null; //variable donde se guarda la conexion del websocket

function Humedad() {

    const [hum,setHum] = useState(0)
    const [humAr,setHumAr] = useState([]);

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
        setHum(payloadData.data.humedad)

        let dato = []
        dato.push(payloadData.data.humedad)
        setHumAr(dato)
    }
    
    useEffect(() => {
        connect();
      }, [])
   
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