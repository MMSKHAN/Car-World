import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {Key, EnvelopeHeart,PersonCircle,GenderMale,GenderFemale } from 'react-bootstrap-icons';
import imge from "../img/user img.jpg"
import Aos from 'aos';
import "aos/dist/aos.css"
// import { Circle } from 'react-bootstrap-icons';

function Registration() {
  useEffect(()=>{
    Aos.init({
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 300
    })
  })

  return (
    <>
      <div className='container logincontainer  ' style={{marginTop:"150px", marginBottom:"150px" }} >
     <div className=" row  logindive mt-5 mb-5">
     <form>
  <div className="form-group row gx-0  " data-aos="fade-left"  >
  <div class="text-center">
  <img src={imge} class="rounded-circle mt-3 mb-3  " alt="imgeh"/>
</div>
    <label for="staticname" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark p-2"><PersonCircle/></label>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
      <input type="text" className="form-control mt-3 mb-3 " id="staticEmail" placeholder='First Name'/>
    </div>
  </div>
  <div className="form-group row gx-0"data-aos="fade-right">
    <label for="inputPassword" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark p-2 "><PersonCircle/></label>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
      <input type="text" className="form-control mt-3 mb-3 " id="inputPassword" placeholder="Last Name"/>
    </div>
    </div>
  <div className="form-group row"data-aos="fade-up">
    {/* <label for="inputPassword" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark "><Key /></label> */}
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10   " style={{color:"black"}} >
     <div className="form-check">
       <h4  >Gender</h4>
      <input className='form-check-input'  type="radio" name="gender" id="gender"   />
    <label className='form-check-label' htmlFor="gender"> <GenderMale/>  Male </label>
    </div>
    <div className="form-check">
      <input className='form-check-input'  type="radio" name="gender" id="gender"  />
    <label className='form-check-label' htmlFor="gender"> <GenderFemale/> Female </label>
    </div>
    </div>
    </div>

    <div className="form-group row gx-0"data-aos="fade-down">
    <label for="inputPassword" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark p-2 "><EnvelopeHeart /></label>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
      <input type="email" className="form-control mt-3 mb-3 " id="inputPassword" placeholder="Email"/>
    </div>
    </div>
    <div className="form-group row gx-0"data-aos="flip-down" >
    <label for="inputPassword" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark p-2"><Key /></label>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
      <input type="password" className="form-control mt-3 mb-3 " id="inputPassword" placeholder="Password"/>
    </div>
    </div>
    <div className="form-group row gx-0 " data-aos="flip-up" >
    <label for="inputPassword" className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label mt-3 mb-3 bg-dark p-2 "><Key /></label>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
      <input type="password" className="form-control mt-3 mb-3 " id="inputPassword" placeholder="Conferm Password"/>
    </div>

    <div className="form-group row flex-column " >
      <div className="col-sm-4  align-self-center "> <div className="btn btn-primary btn-md btn-block  mt-3 mb-3 ">Login</div> </div>
      <div className="col-sm-8 align-self-center    " style={{color:"black"}} > <Link to={"/Login"} className="nav-link" >  Already have an account? </Link></div> 
    </div>
    </div>
</form>
     </div>
      </div>

    </>
  )
}

export default Registration
