import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Arry from './Arry/Arry'
function New() {
  useEffect(()=>{
    Aos.init({
      // offset: 200,
      duration: 2200,
      easing: 'ease-in-sine',
      delay: 100,
    })
  })
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row rounded ">
            <div className="col-md-4 border border-secondary bg-white " data-aos="flip-left" >
                <div className="row flex-column align-items-center ">
                    <div className="col-md-4 w-50"><img src={Arry[8].pic1} alt="pic" /></div>
                    <div className="col-md-4 "><img style={{width:"60px"}} src={Arry[8].pic2} alt="pic" /></div>
                    <div className="d-block  text-center mt-3 "><h5 className='text-center' >{Arry[8].title}</h5><p>{Arry[8].context}</p> <button className='btn btn-dark mt-3 mb-3 ' >{Arry[8].btn}</button>  </div>
                </div>
            </div>

            <div className="col-md-4 border border-secondary bg-white " data-aos="slide-right" >
                <div className="row flex-column align-items-center ">
                    <div className="col-md-4 w-50 pt-1 "><img style={{width: "235px", height: "257px"}} src={Arry[9].pic1} alt="pic" /></div>
                    <div className="col-md-4 "><img  style={{width:"60px"}} src={Arry[9].pic2} alt="pic" /></div>
                    <div className="d-block  text-center mt-3 "><h5 className='text-center' >{Arry[9].title}</h5><p>{Arry[9].context}</p> <button className='btn btn-dark mt-3 mb-3 ' >{Arry[9].btn}</button>  </div>
                </div>
            </div>

            <div className="col-md-4 border border-secondary bg-white " data-aos="flip-right" >
                <div className="row flex-column align-items-center ">
    <div className="col-md-4 w-50 p-1 "><img style={{width: "169px", height:"279px" }} src={Arry[10].pic1} alt="pic" /></div>
                    <div className="col-md-4 "><img style={{width:"60px"}} src={Arry[10].pic2} alt="pic" /></div>
                    <div className="d-block  text-center mt-3 "><h5 className='text-center' >{Arry[10].title}</h5><p>{Arry[10].context}</p> <button className='btn btn-dark mt-3 mb-3 ' >{Arry[10].btn}</button>  </div>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default New
