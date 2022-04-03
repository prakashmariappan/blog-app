import React from 'react';
import { Link } from 'react-router-dom';
const Latestarticles = () => (
    <>
    <div className='latest-articles'>
    <div className='la-heading'>
        <h1 className='la-h1'>The </h1>
        <h1 className='la-h2'>Latest</h1>
    </div>
    <div className='la-cards-container'>
    <div className='la-cards'>
        <div className='laimg la-img1'></div>
        <div className='la-content'>
        <div className='la-content-div'>
        <Link to='/food/food1'>Spinach Can Turn Harmful if Consumed in Excess</Link>
        <p>Spinach is low in calories, loaded with healthy nutrients, rich in essential minerals, and vitamins like calcium, magnesium, iron, vitamin A, C, and K </p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ June 12 2021</h6>
        </div>
        </div>
        </div>
    </div>
    <div className='la-cards'>
        <div className='laimg la-img2'></div>
        <div className='la-content'>
        <div className='la-content-div'>
        <Link to='/fitness/fitness2'>Are you guilty of making these five common yoga mistakes?</Link>
        <p>When it comes to fitness, there is nothing that can beat yoga, which is packed with physical and mental health benefits. It can help you fight diseases.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ April 08 2021</h6>
        </div>
        </div>
        </div>
    </div>
    <div className='la-cards'>
        <div className='laimg la-img3'></div>
        <div className='la-content'>
        <div className='la-content-div'>
        <Link to='/technology/technology2'>Asus ExpertBook B1400 lineup comes to India</Link>
        <p>ASUS has launched their new ExpertBook B1400 lineup of business-oriented laptops in India. The device is powered by the latest 11th Gen Intel processors.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ December 22 2021</h6>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
  
  export default Latestarticles