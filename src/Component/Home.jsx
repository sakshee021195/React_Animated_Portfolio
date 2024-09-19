import React, { useEffect, useRef } from 'react'
import pdf from '../Component/PDF/Sakshee-Jambucha.pdf'
import hero from '../Component/Data/hero.json'
import Typed from "typed.js";


const Home = () => {
  const typedRef=useRef(null);
  useEffect(() => {
    const options={
      strings:["Welcome to my Protfolio","My name is Sakshee Jambucha","I'm a Full Stack Developer"],
      typeSpeed: 50, // Typing speed
      backSpeed: 30, // Backspacing speed
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before starting the typing
      loop: true, // Looping the animation
      showCursor: false, // Show cursor
     
    }

    const typed=new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-up-right" data-aos-duration="10000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Sakshee-Jambucha.pdf" className="btn my-3 btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="10000">
            <img src={`/assets/${hero.imgSrc}`} alt="My Image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home