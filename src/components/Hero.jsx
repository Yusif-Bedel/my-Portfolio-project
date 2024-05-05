import React from 'react'
import '../components/Hero.css'
const Hero = () => {
  
  return (
    <section className='heroSec'>
      <div className="container">
        <div className="heroCon">
            <div className='heroLeft'>
                <h1>HI, I'M YUSIF! CREATIVE <span>CODER</span></h1>
                <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                <div className='heroLinks'>
                    <a style={{color:"black",background:"#55e6a5",padding:"20px",fontWeight:"bold"}} href="#">Download Cv <i style={{marginLeft:"5px"}} class="fa-solid fa-download"></i></a>
                    <a style={{color:"white",fontWeight:"bold"}} href="#"><i style={{color:"black",marginRight:"5px",background:"#55e6a5",padding:"20px",borderRadius:"50%"}} class="fa-solid fa-play"></i>Watch The Video</a>
                </div>
            </div>
            <div className='heroRight'>
              <img src="https://pbs.twimg.com/profile_images/757974066011770880/ae2Eop2g_400x400.jpg" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
