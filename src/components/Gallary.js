import React,{useState,useEffect} from 'react'
import {Search} from 'react-bootstrap-icons'
import Garray from './Garray/Garray'
import Brands from './Garray/Brands'
import Aos from 'aos';
import "aos/dist/aos.css"
function Gallary(props) {
useEffect(()=>{
 Aos.init({
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 300
 })
})
  /////searching/////
  const [filter, setfilter]=useState("")
  const click=(event)=>{
    setfilter(event.target.value);
  }
  let showdata=Garray.newGarray.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })
  
  return (
    <>
    <div className="container-fluid">
    <div className="row">
{Brands.map((item)=>{
  return(
    
    <div className="col-sm-1 bg-white mt-3 " data-aos="fade-up" ><img src={item.pic} alt="pictures" style={{height:"50px",width:"50px"}} /></div>
  )
})}
</div>
    </div>

    <div className="container mt-5 mb-5">



      {/* brands.........................................  */}
      <div className="row justify-content-center ">
        <div className="col-md-4 mx-auto  ">
          <div className='d-flex border bg-white border-dark'data-aos="fade-down">
            <input className="form-control  border-0 bg-whire " placeholder="Search"   onChange={click.bind(this)}  value={filter} />
            <button className="btn bg-white" type="submit" onChange={click.bind(this)} ><Search /></button>
            </div>
        </div>
      </div>
    </div>
    

        <div className='container' >
          <div className='row' >
        {showdata.map((item)=>{
          return(
            <div className='col-md-4 mb-3 '  data-aos="flip-up" > 
        <div className="card p-0 overflow-hidden h-100 shadow">
  <img src={item.pos} className="card-img-top h-50 " alt="img"/>
  <div className="card-body text-center ">
    <h5 style={{ 
background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,56,9,0.35898109243697474) 31%, rgba(0,212,255,1) 100%)"}} className="card-title  bg-dark text-white px-2 py-3">{item.title}</h5>
    <span id="rateMe1"></span>
    <p>{item.info}</p>
  <div className="btn btn-secondary border border-dark text-danger py-2 px-3" style={{background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(165,233,148,0.7091211484593838) 100%)"}} > Explore Further</div>
  </div>
</div>
          </div>

          )
        })}

        
        </div>
        </div>
         </>)
}

export default Gallary