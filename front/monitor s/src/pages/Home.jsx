import React, { useState } from 'react'
import ButtonC from '../base/ButtonC';
import Titulo from '../base/Titulo';
import VistaHome from '../components/VistaHome'
import Datos from "../base/Datos";
import {img} from "../img";
import ButtonReg from '../base/ButtonReg';
import {useNavigate, Link }from 'react-router-dom'

function Home() {
    
    const [temp, setTemp] = useState(0)
    const [hum,setHum] = useState(0)

    let temperatura = temp+"C°";
    let porcentaje = hum+"%";

    const navigate = useNavigate();

    setInterval(actualizar,2000)

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
            setTemp(ola.humedad)
            setHum(ola.temperatura)
        })
        .catch(error => console.log('error', error)); 
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