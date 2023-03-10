import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import Gallary from './components/Gallary';
import Footer from './components/Footer';
import Contectus from './components/Contectus';
import Services from './components/Services';
import Registration from './components/Form/Registration';
import Login from './components/Form/Login';
import {BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
   < Nav />
   <Routes>
    <Route exect path="/"element={< Home />}/>
    <Route exect path="/AboutUs"element={< AboutUS />}/>
    <Route exect path="/Services"element={< Services />}/>
    <Route exect path="/Gallary"element={< Gallary />}/>
    <Route exect path="/Contectus"element={< Contectus />}/>
    <Route exect path="/Gallary"element={< Gallary />}/>
    <Route exect path="/Login"element={< Login />}/>
    <Route exect path="/Registration"element={< Registration/>}/>


   </Routes>
   
  <Footer/>
   </BrowserRouter>)
}

export default App;