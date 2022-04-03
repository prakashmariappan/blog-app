import React from "react";
import {Link} from "react-router-dom"
const Toppost =()=>(
    <>
    <div className='la-heading'>
        <h1 className='la-h1'>Top </h1>
        <h1 className='la-h2'>Posts</h1>
    </div>
     <div className="tp-cards-con">

       <div className="big-tpcard">
        <div className="tp-card-img1"></div>
        <div className="big-tp-card-content">
        <Link to='/fitness/fitness1'>Just 10 minutes of daily exercise...</Link>
        <div className='tp-field'>
            <h5>Fitness</h5>
            <h6>/ February 2 2022</h6>
        </div>
        </div>
        </div>

        <div className="tpcards">
        <div className="tpcardimg tp-card-img3"></div>
        <div className="tp-card-content">
        <Link to='/bollywood/bollywood2'>The Internet Is Busy Crushing...</Link>
        <div className='tp-field'>
            <h5>Bollywood</h5>
            <h6>/ February 3 2022</h6>
        </div>
        </div>
        </div> 


        <div className="tpcards">
        <div className="tpcardimg tp-card-img5"></div>
        <div className="tp-card-content">
        <Link to='/hollywood/hollywood3'>Spider-Man: No Way Home...</Link>
        <div className='tp-field'>
            <h5>Hollywood</h5>
            <h6>/ February 17 2022</h6>
        </div>
        </div>
        </div> 

        <div className="tpcards">
        <div className="tpcardimg tp-card-img6"></div>
        <div className="tp-card-content">
        <Link to='/food/food3'>Beef is wow-worthy when...</Link>
        <div className='tp-field'>
            <h5>Food</h5>
            <h6>/ February 18 2022</h6>
        </div>
        </div>
        </div> 

    </div>
    </>
)
export default Toppost;