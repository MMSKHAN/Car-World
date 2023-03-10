import React, { useEffect } from 'react'
import { Search } from 'react-bootstrap-icons'
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Find.css"
function Find() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300})
  })
  return (
    <>
       <div className="container-fluid  " data-aos="fade-right" >
  <div className="row  back " style={{height:"50vh"}} >
    <div class="d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center text-white " data-aos="zoom-in-up" >
  <div class="p-2"><h2>Service Centers</h2></div>
  <div class="p-2"><p>Enter your Zip Code to find dealer offers near you.</p></div>
  <div class="p-2 border bg-white text-end "><input type="text" className='border-0' placeholder='Zip code' style={{width:"85%",border:
"none"}} /> <Search className='fa-2x text-dark ' /></div>
</div>
</div>
  </div>
    </>
  )
}

export default Find
