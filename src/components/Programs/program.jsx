import React from 'react'
import './program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'


const program = () => {
  return (
    <div className="program" id='program'>
        {/* header */}

        <div className="program-header">
            <span>Explore Our</span>
            <span>Programs</span>
            <span>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program,x)=>(
                <div className="category" key={x}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span>
                    <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default program