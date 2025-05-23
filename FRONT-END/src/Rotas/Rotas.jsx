import { Routes, Route } from "react-router-dom";
import { Login } from "../Paginas/Login";
import { Inicial } from "../Paginas/Inicial"

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>

            <Route />
        </Routes>
    )
}