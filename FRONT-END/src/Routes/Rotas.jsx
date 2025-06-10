import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from '../Pages/Login';
import { Inicial } from "../Pages/Inicial";
import {Envirouments} from "../Pages/Envirouments"
import { Subjects } from "../Pages/Subjects";
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