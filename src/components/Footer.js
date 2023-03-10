import React from 'react'
import {Facebook,Whatsapp,Instagram, Mailbox2} from 'react-bootstrap-icons';
function Footer() {
  return (
   <div className="container-fluid mt-1" >
    <div className='row' >
      <div className='col-md-5 bg-dark ' >  
      <ul className="nav justify-content-center bg-dark ">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="link">Developer Contect</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="link">Terms Of Use </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="link"> License</a>
  </li>
</ul>

      </div>
      <div className="col-md-7 bg-dark " >
<ul className="nav justify-content-center bg-dark ">

  <li className="nav-item">
    <a className="nav-link" href="link"><Mailbox2/></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="link"> <Facebook /> </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="link"> <Instagram/></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="link"> <Whatsapp/></a>
  </li>
  
</ul>
<div className="col-md-12 "><p className='copyri' >copyright © 2022 all rights reserved  </p></div>
</div>
       </div>


   </div>
  )
}

export default Footer