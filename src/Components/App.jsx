
import "bootstrap/dist/css/bootstrap.min.css"
import "../Assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sign_Up from "./Login.jsx"
import Sign_In from "./Register.jsx"
import GraficaHum from "./GraficaHum.jsx";
import GraficaTemp from "./GraficaTemp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sign_Up/>} />
                <Route path="/Register" element={<Sign_In/>}/>
                <Route path="/GraficHum" element={<GraficaHum/>}/>
                <Route path="/GraficaTemp" element={<GraficaTemp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
