import React from 'react'
import Home from './pages/Home'
import Humedad from './pages/Humedad'
import Temperatura from './pages/Temperatura'
import Notnot from './pages/Notnot'
import Sign_Up from "./pages/Login.jsx"
import Sign_In from "./pages/Register.jsx"


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Notnot/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Humedad' element={<Humedad/>} />
            <Route path='/Temperatura' element={<Temperatura/>} />
            <Route path="/" element={<Sign_Up/>} />
            <Route path="/Register" element={<Sign_In/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App