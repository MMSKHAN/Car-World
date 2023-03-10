import React,{useEffect} from 'react'
import {Key, EnvelopeHeart } from 'react-bootstrap-icons';
import imge from "../img/user img.jpg"
import { Link } from 'react-router-dom';
import "./form.css"
import Aos from 'aos';
import "aos/dist/aos.css";
function Login() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 300})
  })
  return (
    <div className='container logincontainer'>
     <div className=" row  logindive"data-aos="flip-up">
     <form>
  <div className="form-group row gx-0 ">
  <div class="text-center  "data-aos="zoom-in">
  <img src={imge} class="rounded-circle mt-3 mb-3 " alt="imgeh"/>
</div>
    <label for="staticEmail" className="col-sm-1 col-form-label mt-3 mb-3 bg-dark p-2 "><EnvelopeHeart/></label>
    <div className="col-sm-10">
      <input type="email" className="form-control mt-3 mb-3  " id="staticEmail" placeholder='Email@.com'/>
    </div>
  </div>
  <div className="form-group row gx-0 ">
    <label for="inputPassword" className="col-sm-1 col-form-label mt-3 mb-3 bg-dark p-2 "><Key /></label>
    <div className="col-sm-10">
      <input type="password" className="form-control mt-3 mb-3 border-rounde " id="inputPassword" placeholder="Password"/>
    </div>
    <div className="form-group row flex-column " >
      <div className="col-sm-4 mt-3 mb-3 align-self-center "> <button className="btn btn-primary btn-md btn-block ">Login</button> </div>
      <div className="col-sm-4 align-self-center mt-2 mb-2   " style={{color:"black"}} > <Link to={"/Registration"} className="nav-link" >  Sign up </Link></div> 
      <div className='col-sm-5 align-self-center mb-2 ' ><h6 style={{color:"blue"}} > <Link to={"/Registration"} className="nav-link" > Forgot Password </Link></h6> </div>
    </div>

  </div>
</form>
     </div>
      </div>
   
  )
}

export default Login
