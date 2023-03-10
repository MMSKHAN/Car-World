import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./Nav.css";
import imged from "./img/logo.png"
function Nav() {
  
  return (
    <div className="container-fluid pt-2 " >
      <div className="row mt-0 rcolor rounded "  >
        <div className="col-md-12   ">
        <nav className="navbar navbar-expand-lg "  >
      <Link className="navbar-brand  " to="/"><img style={{hight:"60px", width:"70px",borderRadius: "100px"}} src={imged} alt="img"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-5 " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-lg-0 bg-dark  " >
          <li className="nav-item px-1 mx-1 licolor  ">
            <Link className="nav-link  " aria-current="page" style={{color:"White"}} to="/">Home</Link>
          </li>
          <li className="nav-item px-1 mx-1 licolor">
            <Link className="nav-link " to="/AboutUS"  style={{color:"White"}}>About</Link>
          </li>
          <li className="nav-item px-1 mx-1 licolor ">
            <Link className="nav-link" to="/Gallary"  style={{color:"White"}} >Brands</Link>
          </li>
          <li className="nav-item px-1 mx-1 licolor ">
            <Link className="nav-link" to="/Services"  style={{color:"White"}}>Services</Link>
          </li>
          {/* <li className="nav-item px-1 mx-1 licolor ">
            <Link className="nav-link" to="/ContectUS"  style={{color:"White"}} >Contect Us</Link>
          </li>
           */}
          <li className="nav-item px-1 mx-1 licolor ">
            <Link className="nav-link" to="/Login"  style={{color:"White"}} >Login</Link>
          </li>
           
        </ul>
                    <Link className="nav-link" to="/Gallary">
            <button className="btn btn-outline-success ml-2 " type="submit"><Search /></button>
                    </Link>
          
         
        
        
      </div>
  </nav>
        </div>
      </div>
      </div>
     
  )
  
}

export default Nav 