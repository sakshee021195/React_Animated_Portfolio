import React from 'react'
import Skill from "./Data/skills.json"

const Skills = () => {
  return (
    <>
      <div className="container skill">
        <h1>SKILLS</h1>
        
          <div className="items" >
             { Skill.map((data)=>{
                  return(
                    <>
                    <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000" id='skill'>
                      <img src={`/assets/${data.imageSrc}`} alt="" />
                      <h3 style={{color:"white"}}>{data.title}</h3>
                    </div>
                  </>
                  )
                 
            })}
          </div>
        
      </div>
    </>
  )
}

export default Skills