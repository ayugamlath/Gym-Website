import React from 'react';
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
    <div className="program-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>WITH US</span>
    </div>
    {/* plans card */}
    <div className="plans">
        {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>
                <div className="features">
                    {plan.features.map((features,m)=>(
                        <div className="feature" key={m}>
                            <img src={whiteTick} alt="" className="whiteTick" />
                            <span key={m}>{features}</span>
                        </div>
                    ))}
                </div>
                <div><span>See more benifits</span></div>
                <button className="btn">Join Now</button>
            </div>
            ))}
    </div>
    </div>
  );
};

export default Plans;