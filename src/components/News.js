import React, { useEffect } from 'react'
import "./News.css"
import Aos from 'aos'
import "aos/dist/aos.css"
function News() {
  useEffect(()=>{
    Aos.init({
      // offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      // delay: 100,
    })
  })
  return (
    <div>
      <div className="container-fluid mt-5 mb-0 ">
        <div className="row  "  >
          <div className="col-md-8 backimg align-baseline " data-aos="flip-right" >
          </div>
          <div className="col-md-4 text-center text-light bg-dark"  data-aos="zoom-in-up" >
            <h2 style={{marginTop:"30vh"}} data-aos="flip-up" >Moving toward tomorrow</h2>
            <h6 data-aos="flip-up" >Get inspired by stories and news within the community.</h6>
            <button className="btn btn-outline-light rounded-0 px-4 mt-3  "  data-aos="slide-left" >See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
