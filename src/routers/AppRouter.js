import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from '../pages/Clients'
import Users from '../pages/Users';
// import Navbar from '../components/Navbar'


export default function AppRouter(){
    return(
        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
                <Route path='/pages/Clients' element = {<Clients/>} />
                <Route path='/pages/Users' element = {<Users/>} />

            
                <Route path='/' element = {<h1>Home</h1>} />
                {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
                
            </Routes>                                 
        </BrowserRouter>
    )
}