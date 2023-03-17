
import "bootstrap/dist/css/bootstrap.min.css"
import "../Assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sign_Up from "../Components/Login.js"
import Sign_In from "../Components/Register.js"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sign_Up/>} />
                <Route path="/Register" element={<Sign_In/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
