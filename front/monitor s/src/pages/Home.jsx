import React from 'react'
import ButtonC from '../base/ButtonC';
import Titulo from '../base/Titulo';
import VistaHome from '../components/VistaHome'
import Datos from "../base/Datos";
import {img} from "../img";
//import { Component } from 'react';
import ButtonReg from '../base/ButtonReg';
import { Link }from 'react-router-dom'



function Home() {
    let temperatura = "28C°";
    let porcentaje = "35%";
  return (
    <>
        <div className="container-fluid ht">
            <div className="row">
                <div className="col-1">
                    <div className="row">
                        <div className="col-9 m5">
                            <ButtonC typ={"button"} img={img.iconos.Tuerca} />
                        </div>
                    </div>
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
        </div>
    </>
  )
}

export default Home