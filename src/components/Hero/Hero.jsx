import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header />
            {/* the best fitness */}
            <div className="the-best">
            <div></div>
            <span>The best fitness club</span>
            </div>

            {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>shape</span>
                <span>Your</span>
              </div>
              <div>
                <span>
                  Ideal Body
                </span>
              </div>
              <div>
                <span>In this Reactjs project, we will make an awesome responsive gym website step-by-step. We learn React hooks, modern CSS, framer motion, and many more. For contact, we will use the Email js library to make this site more functional and practical.</span>
              </div>
            </div>
            {/* figures */}
            <div className="figure">
              <div>
                <span>139</span>
                <span>Expert Coach</span>
              </div>
              <div>
                <span>1000+</span><span>
                member joined</span>
              </div>
              <div>
                <span>40+</span><span>
                Fitness Programs</span>
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
              </div>
        </div>
        <div className='right-h'>
          <button className="btn">Join Now</button>
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>118 bpm</span>
        </div>
    </div>
  )
}

export default Hero