// import { within } from '@testing-library/react'
import React,{useEffect} from 'react'
import { GraphUpArrow } from 'react-bootstrap-icons'
import "./Popular.css"
import Aos from 'aos'
import "aos/dist/aos.css"
function Popular() {
    useEffect(()=>{
      Aos.init({
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 300})
    })
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div style={{backgroundColor:"rgba(255,255,255,0.5)"}} data-aos="zoom-in" >
          <h1 className='text-center p-5  ' >Popular Sevices</h1>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b1" style={{height:"70vh",width:"50vh"}} data-aos="flip-left"  > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b2" style={{height:"70vh",width:"50vh"}} data-aos="fade-right" > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b3" style={{height:"70vh",width:"50vh"}} data-aos="flip-left"> <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          
        </div>
         <div className="row mt-5 d-flex justify-content-center">
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b4" style={{height:"70vh",width:"50vh"}} data-aos="flip-right" > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div> 
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b2" style={{height:"70vh",width:"50vh"}} data-aos="fade-left"  > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b5" style={{height:"70vh",width:"50vh"}} data-aos="flip-right" > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          
        </div>
        <div className="row mt-5 d-flex justify-content-center ">
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b6" style={{height:"70vh",width:"50vh"}}  data-aos="fade-left" > <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b7" style={{height:"70vh",width:"50vh"}}  data-aos="flip-right"> <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          <div className="col-sm-4   d-flex justify-content-center align-items-end mx-4 mt-3 b8 " style={{height:"70vh",width:"50vh"}}  data-aos="flip-left"> <h5 className=' border border-dark p-2' ><GraphUpArrow/> Booking Near you</h5> </div>
          
        </div>
      </div>
    </>
  )
}

export default Popular
