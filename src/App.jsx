import React, { useEffect } from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Experience from "./Component/Experience"
import Skills from "./Component/Skills"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
import Aos from "aos";
import "aos/dist/aos.css";


const App=()=>{

  useEffect(() => {
    Aos.init();
  
   
  }, [])
  
  return(
   <>
    <Navbar/>
    <div className="container">
      <Home/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>    
   </>
  
  )
}
export default App
