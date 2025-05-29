import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from '../Paginas/Login';
import { Inicial } from "../Paginas/Inicial";
import {Envirouments} from "../Paginas/Envirouments"
import { Subjects } from "../Paginas/Subjects";
export function RoutesComp() {
    
    return (
        <Routes>
            <Route path="/inicial" element={<Inicial />}>
                <Route index element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path='/disciplinas' element={<Subjects/>} />
                <Route path='/Reservas' element={<Envirouments/>} />
            </Route>
        </Routes>
    );
}