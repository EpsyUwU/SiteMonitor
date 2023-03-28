
import "bootstrap/dist/css/bootstrap.min.css"
import "../Assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sign_Up from "./Login.jsx"
import Sign_In from "./Register.jsx"
import Grafica from "./Grafica.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sign_Up/>} />
                <Route path="/Register" element={<Sign_In/>}/>
                <Route path="/GraficHum" element={<Grafica/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
