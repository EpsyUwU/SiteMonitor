import React, { useState } from 'react'
import ButtonC from '../base/ButtonC';
import Titulo from '../base/Titulo';
import VistaHome from '../components/VistaHome'
import Datos from "../base/Datos";
import {img} from "../img";
import ButtonReg from '../base/ButtonReg';
import { Link }from 'react-router-dom'
import ConnectionRabbitMQ from '../rabbitMQ/ConnectionRabbitMQ';


function Home() {
    
    const [temp, setTemp] = useState(0)

    setInterval(() => setTemp(temp+5), 5000)

    let temperatura = temp+"C°";
    let porcentaje = "35%";
  return (
    <>
        <div className="container-fluid ht">
            <div className="row">
                <div className="col-1">
                    <div className="row ">
                        <div className="col-9 m5">
                            <ButtonC typ={"button"} img={img.iconos.Apagar} />
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
            <h1>hola</h1>
            <ConnectionRabbitMQ exchange="newTyHRequest"/>
        </div>
    </>
  )
}

export default Home