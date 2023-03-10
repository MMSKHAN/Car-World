import React,{useEffect} from 'react'
import { Google } from 'react-bootstrap-icons'
import { Twitter,Facebook } from 'react-bootstrap-icons'
import Aos from 'aos'
import "aos/dist/aos.css"
function Customer() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300})
  })
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row mt-5 " data-aos="zoom-in-left" style={{backgroundColor:"rgba(275,275,275,0.5)"}} ><h1  className='text-primary  p-4 'data-aos="fade-down" >Customer Reviews</h1></div>
      
        <div className="row mt-5 d-flex justify-content-between " >
            <div className="col-md-3 m-2 bg-white  rounded"data-aos="flip-left">
                <h5 className='text-center mt-5 mb-4 text-danger ' >Highly Recommended!</h5>
                <p>My car suddenly stopped in the middle of the road on my way to the office, and it was gomechanic to the rescue. I called them, they took the vehicle and returned it the same day. I was very pleased with the professionalism and the speediness of the service. Their services really impressed me a lot and I would definitely recommend them to my friends and colleagues.</p>
<div><Google className='text-danger fa-3x' /> <span className='text-black' > Saud khan</span></div>
<p>Google</p>
<h5 className='text-danger' >Workshop Name</h5>
<p>GoMechanics-Hub, Multan</p>
                
            </div>
            <div className="col-md-3 m-2 bg-dark "data-aos="zoom-in-left">
            <h5 className='text-center mt-5 mb-4 text-primary ' >I Can Vouch For Them</h5>
                <p className='text-white' >
                I always visit gomechanic garage near my place for all kinds of repair and car needs. They always use genuine techniques and parts. The staff was very professional, more than willing to answer my queries. Great place, friendly atmosphere, and reasonable rates.
                and reasonable rates. Their services really impressed me a lot and I would definitely recommend them to my friends  Highly recommended!
                    </p>
<div><Twitter className='text-primary m-2 fa-3x' /> <span className='text-primary' > Daud khan</span></div>
<p className='text-white' >Twitter</p>
<h5 className='text-primary' >Workshop Name</h5>
<p className='text-white' >GoMechanics-Hub, Islamabad</p>
            </div>
           
            <div className="col-md-3 m-2 bg-dark "data-aos="flip-right">
            <h5 className='text-center mt-5 mb-4 ' style={{color:"blue"}} > It is definitely GoMechanic for me</h5>
                <p className='text-white' >
                One of the best customer service I have experienced at a car garage. Technicians gave me very gave me clear information about what was wrong with my car, they also gave me a reasonable price quote before starting the repair process. The services were commendable and satisfactory.
                    </p>
<div><Facebook className='tm-3 fa-3x'style={{color:"blue"}} /> <span style={{color:"blue"}} > Sameed khan</span></div>
<p className='text-white' >Facebook</p>
<h5 style={{color:"blue"}} >Workshop Name</h5>
<p className='text-white' >GoMechanics-Hub, Lahore</p>
            </div>




        </div>
      </div>
    </div>
  )
}

export default Customer
