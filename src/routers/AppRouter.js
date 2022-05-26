import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from '../pages/Clients'
import Navbar from '../components/Navbar'


export default function AppRouter(){
    return(
        <BrowserRouter>
             <Navbar />
            <Routes>
                <Route path='/pages/Clients' element = {<Clients/>} />
            
                <Route path='/' element = {<h1>Dashboard</h1>} />
                {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
                
            </Routes>                                 
        </BrowserRouter>
    )
}