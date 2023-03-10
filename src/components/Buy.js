import React,{useEffect} from 'react'
import { GeoAlt,ChevronRight, CashCoin, TagsFill,Clipboard2CheckFill } from 'react-bootstrap-icons'
import"./Buy.css"
import Aos from 'aos';
import "aos/dist/aos.css"
function Buy() {
  useEffect(()=>{
    Aos.init({ 
      offset: 200,
      duration: 2200,
      easing: 'ease-in-sine',
      delay: 100
    })
      Aos.refresh({
        offset: 200,
        duration: 2200,
        easing: 'ease-in-sine',
        delay: 100
      })
  })
  return (
    <div>
      <div className="container-fluid mt-5 mb-5 ">
        <div className="row gx-0 mt-5 mb-5 ">
            <div className="col-md-6 bg-white gx-0 " data-aos='slide-right'  >
                <div className="row gx-0">
                    <a href='/' className="col-md-6 border gx-0 border-dark"data-aos='flip-up' >
                        
                         <div className='btn content-center px-5 py-5 ' > <div><GeoAlt className='fa-3x' /></div><h6>Find A Dealer <ChevronRight className='fa-sm' /> </h6>  </div>
                 </a>
                    <a href='/' className="col-md-6 border  border-dark "> 
                    <div  className='btn content-center px-5 py-5 ' > <div><CashCoin className='fa-3x' /></div><h6>Find A Dealer <ChevronRight className='fa-sm' /> </h6>  </div>
                 </a>
                </div>

                <a href='/' className="row gx-0 "data-aos='flip-up'>
                    <div className="col-md-6 border gx-0 border-dark ">
                <a href="/" className='btn content-center px-5 py-5 ' > <div><TagsFill className='fa-3x' /></div><h6>Find A Dealer <ChevronRight className='fa-sm' /> </h6>  </a>

                    </div>
                    <div className="col-md-6 border gx-0 border-dark ">
                <a href="/" className='btn content-center px-5 py-5 ' > <div><Clipboard2CheckFill className='fa-3x' /></div><h6>Find A Dealer <ChevronRight className='fa-sm' /> </h6>  </a>

                    </div>
                </a>
                
                
                

            </div>
            <div className="col-md-6 carbuy  "data-aos="slide-right "  >
               <div>
               <div className=" px-5 py-2 text-white " data-aos='fade-up ' >
                <h6>
                    JD POWER AWARD
                </h6>
                    <h3>10 Million Vehicles Sold</h3>
                    <button className="btn btn-outline-light rounded-0 px-4 mt-3  ">See More</button>
                    </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Buy
