import React, { useEffect } from 'react'
import Aos from 'aos'
import "./About.css"
import "aos/dist/aos.css"
import imged from"./img/fm/abu.jpg"
import imged1 from"./img/fm/dau.jpg"
import imged2 from"./img/fm/nom.jpg"
import imged3 from"./img/fm/sha.jpg"
import imged4 from"./img/fm/usman.jpg"
import imged5 from"./img/fm/rashid.jpg"
import imged6 from"./img/fm/saud.jpg"
// import { useActionData } from 'react-router-dom'
function AboutUS() {
useEffect(()=>{
  Aos.init({ 
    offset: 200,
    duration: 2200,
    easing: 'ease-in-sine',
    delay: 100
  })
})
  return (
    <>
  <div className="container-fluid">
    <div className="row bg-white  "  >
      <div  className="col-sm-12">
        <h1  data-aos="zoom-in-up"  >
        About Us 
        </h1>
 <h6 data-aos="zoom-in-down" > <b> Abdul Wahid khan </b> the owner of this fabulous car World company aims to be the best of both worlds - Reliable and Cost-effective Car Services</h6>
         
        </div>
        <div className="col-sm-12" >
          <p data-aos="zoom-in-down" >
          Car Servicing, Car repairs and Car cleaning - we are your one-stop solution for all things cars</p>
          <p data-aos="flip-up" >
          A brainchild of 6 brothers - Saud khan, Daud Khan, Usman Ghani, Noman Ghani Rashid Minhas  Shahaid Abbas, under the supervision of Mr Abdul Whaid khan Car World is a network of technology-enabled car service centres, offering a seamless car service experience at the convenience of a tap. With our highly skilled technicians, manufacturer recommended procedures and the promise of genuine spare parts we are your best bet.</p>
        
        <p data-aos="flip-up" >
        Stay in the comforts of your home or office and make the most of our complimentary pick-up and drop-in service. Count on us to be your personal car care expert, advisor and car mechanic.
        </p>
        
        </div>
    </div>
    <div className="row text-center" data-aos="zoom-up-down" style={{background:"rgba(255,255,255,0.5)"}} ><h1 className='P-4' >World's family</h1></div>
    <div className="row bg-white ">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center  " data-aos="fade-right" > 
<img className='' style={{width:"100%",height:"55vh"}} src={imged} alt="pic" />
<div className='col-sm-6 text-center ' style={{width:"100%", background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(33,194,141,0.6558998599439776) 49%, rgba(165,233,148,0.7091211484593838) 100%)"}} ><h6 className='text-white pt-2 ' >Abdul Whaid Khan</h6></div>
      </div>
      <div className="col-md-6" >
        <div className="row d-flex justify-content-center align-items-center "data-aos="fade-left" >
        <div className="col-sm-6  md  "data-aos="flip-left"  > <img src={imged3} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6 className='text-danger'>Shahaid Abbas</h6> </div>
        <div className="col-sm-6  md " data-aos="flip-right" > <img src={imged5} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6  className='text-danger' >Rashid Minhas</h6> </div>
 
        <div className="col-sm-6 md " data-aos="flip-up" > <img src={imged4} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6  className='text-danger' >Usman Ghamni</h6> </div>
 
        <div className="col-sm-6  md " data-aos="flip-down" > <img src={imged2} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6  className='text-danger' >Noman Ghani</h6> </div>
 
        <div className="col-sm-6  md " data-aos="flip-left" > <img src={imged1} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6 className='text-danger' >Daud Khan</h6> </div>
        <div className="col-sm-6 md " data-aos="flip-right" > <img src={imged6} style={{borderRadius: "172px",width: "101px"
}} alt="pic" /> <h6 className='text-danger  '>Saud khan</h6> </div>
 
  </div>
    </div>
  </div>
  </div>
    </>

  )
}

export default AboutUS;