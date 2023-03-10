import React, { useEffect } from 'react'
import { Trophy } from 'react-bootstrap-icons';
import New from './New';
import"./home.css";
import News from './News';
import Arry from './Arry/Arry';
import Buy from "./Buy"
import Aos from 'aos';
import "aos/dist/aos.css"
function Home() {
  useEffect(()=>{
    Aos.init({ 
      // offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,})
  })
  return (
   <>
   <div className="container-fluid mt-5  ">
    <div className="row   " style={{background: "rgba(90, 90, 90, 0.73)"}}>
      <div className="col-md  "   data-aos="zoom-in-up " >
      <div id="carouselExampleDark" className="carousel carousel-white slide bg-dark " data-bs-ride="carousel">
  <div className="carousel-indicators  ">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner height rounded ">
    <div className="carousel-item active h-100 rounded " data-bs-interval="2000">
      <img src={Arry[0].pic} className="d-block imgh  " alt="this is img"/>

    </div>
    <div className="carousel-item h-100 rounded" data-bs-interval="2000">
      <img src={Arry[1].pic} className="d-block imgh " alt="this is img"/>
  
    </div>
    <div className="carousel-item h-100 rounded" data-bs-interval="2000" >
      <img src={Arry[2].pic} className="d-block imgh " alt="this is img"/>

    </div>
    <div className="carousel-item h-100 rounded" data-bs-interval="2000" >
      <img src={Arry[3].pic} className="d-block imgh " alt="this is img"/>
    </div>
  </div>
  <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark " aria-hidden="true"></span>
    <span className="visually-hidden bg-white ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

    </div>
   </div>

{/*.............................................. Position............................................ */}
   <div className="container-fluid pocon"data-aos="fade-up">
    <div className="row mt-5 pos  " data-aos="flip-left" >
      <div className="col-md-12 text-center bg-dark "><h2 style={{ fontFamily: "Audiowide, sans-serif", color:"white",fontSize:"60px" }}  data-aos="zoom-in-up" ><Trophy style={{color:"gold"}} />  Top Positions  <Trophy style={{color:"silver"}} /> </h2></div>
      <div className="col-md-12 text-center  "><h3 style={{ fontFamily: "Audiowide, sans-serif", color:"white" }} >Competition is the law of jungle,but cooperation is the law of civilization</h3></div>
    </div>

      <div className="row mt-5 text-center pos justify-content-center " data-aos="flip-left">
        {Arry.slice(4,7).map((item)=>{
          return(
<div className='col-md-3 mt-3 h-100' data-aos="flip-left " >
      <div className= "carded ">
      <div className="card carded2 ">
  <img src={item.pic} className="card-img-top " style={{width:"100%"}} alt="img"/>
  <div className="card-body  ">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text mt-0 ">{item.contnt}</p>
    <a href="link" className="btn btn-primary mt-0 ">{item.btn}</a>
  </div>
</div>
                <div className="cover">
                    <div className="coverfront"><h1> {item.position} </h1>
                    <img src={item.logo} alt="" className='h-25 w-25' />
                    </div>
          
                        <div className="coverback"></div>       
                </div>
            </div>    
            </div>
          )
        })}  
            
        
              
    </div>
   </div>
<Buy/>

   <div className='container mt-5' data-aos="flip-left" >
    <div className='row text-center mt5 ' >
      <div col-md-12 ><h2 style={{color:"blanchedalmond", fontFamily:"cursive",fontSize:"40px"}} > <span style={{color:"blue"}} >E</span>XPLORE  <span style={{color:"green"}} >F</span>URTHER</h2> </div>
      <div col-md-12 ><h3 style={{color:"whitesmoke  ",fontFamily:"revert-layer",fontSize:"50px"}} >CONTINUE YOUR JOURNEY</h3> </div>
      <div col-md-12 ><h4 style={{color:"wheat",fontFamily:"revert",fontSize:"40px" }} >We are Moving Towards New Generation</h4> </div>
    </div>

      </div>
          <New/>
          <News/>
          </>
  )
}

export default Home