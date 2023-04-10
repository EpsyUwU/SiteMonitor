import React, { useState, useEffect } from 'react'
import ButtonC from '../base/ButtonC';
import Titulo from '../base/Titulo';
import VistaHome from '../components/VistaHome'
import Datos from "../base/Datos";
import {img} from "../img";
import ButtonReg from '../base/ButtonReg';
import {useNavigate, Link }from 'react-router-dom'
import SockJS from "sockjs-client";
import { over } from "stompjs";



var stompClient = null; //variable donde se guarda la conexion del websocket



function Home() {

    const [temp, setTemp] = useState(0)
    const [hum,setHum] = useState(0)

    let temperatura = temp+"C°";
    let porcentaje = hum+"%";



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
        setHum(payloadData.data.humedad)
    }
    
    useEffect(() => {
        connect();
      }, [])

      const navigate = useNavigate();

      const Navigate = (e) =>{
        e.preventDefault();
        navigate('/Temperatura')
      }

  return (
    <>
        <div className="container-fluid ht">
            <div className="row">
                <div className="col-1">
                    <div className="row ">
                        <div className="col-9 m5">
                            <ButtonC 
                            typ={"button"} 
                            img={img.iconos.Apagar} 
                            />
                            <Link to = "/Login"></Link>
                        </div>
                    </div>
                </div>
                <div className="col-4 offset-3 m5">
                    <Titulo text="Monitor S"></Titulo>
                </div>
            </div>
            <div className="row">
                <div className="col-4 offset-1">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <VistaHome imagen={img.images.Temperatura}/>
                            <Datos data={temperatura}/>
                            <Link to = "/Temperatura"><ButtonReg /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <VistaHome imagen={img.images.Humedad}/>
                            <Datos data={porcentaje} />
                            <Link to = "/Humedad"><ButtonReg /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home