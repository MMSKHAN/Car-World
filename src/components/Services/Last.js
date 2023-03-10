import React,{useEffect}from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
function Last() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300})
  })
 
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row  d-flex justify-content-center align-items-end mt-5 p-3 "style={{backgroundColor:"rgba(255,255,255,0.5)"}} x >
            <div className="col-md-3 border-end  border-dark" data-aos="fade-up-left" > <h1>100B million+</h1><p> CARS SERVICED</p></div>
            <div className="col-md-3 border-end  border-dark"  data-aos="flip-up"  > <h1>100B million+</h1> <p>HAPPY CUSTOMERS</p> </div>
            <div className="col-md-3 border-end  border-dark " data-aos="fade-down"  ><h1>4.5</h1><p>AVERAGE RATING</p></div>
            <div className="col-md-3" data-aos="fade-up-right" ><h1>800000+</h1><p>WORKSHOPS IN ALL OVER THE WORLD</p></div>

        </div>
      </div>
    </div>
  )
}

export default Last
