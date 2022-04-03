import React from 'react';
import {Link} from "react-router-dom"
const Featuredarticles = () => (
    <>
    <div className='mainpic-con'>
      <Link to='/bollywood/bollywood1' className='left-img-con'>
            <h2>Selfiee: Akshay Kumar & Emraan Hashmi's Film To Arrive Directly On OTT?</h2>
            <p>Bollywood / February 3 2022</p>
      </Link>
      <div className='right-img-con'>
      <Link to='/fitness/fitness1' className='sub1'>
             <h2>Just 10 minutes of daily exercise can benefit those over 40</h2>
             <p>Fitness / February 2 2022</p>
      </Link>
      <Link to='/technology/technology1' className='sub2'>
            <h2>Realme 9 Pro series to launch on February</h2>
            <p>Technology / February 3 2022</p>
      </Link>
      </div>
      </div>
    </>
  )
  
  export default Featuredarticles