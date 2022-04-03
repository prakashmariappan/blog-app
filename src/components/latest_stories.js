import React from "react";
import { Link } from 'react-router-dom';
function viewclick (){
    document.getElementById("sec").classList.toggle("sec-row-display")

    var text =document.getElementById("view-content");

if(document.getElementById("sec").classList.contains("sec-row-display")){
    text.innerText= "view more";
}
else{
    text.innerText="view less";
}
}
const Lateststories =()=>(
    <>
     <div className='la-heading'>
        <h1 className='la-h1'>Latest </h1>
        <h1 className='la-h2'>Stories</h1>
    </div>
    <div className="stories-con">

        <div className="stories-card first-card">
        <div className='stories-content-div'>
        <Link to='/fitness/fitness2'>Are you guilty of making these five common yoga mistakes?</Link>
        <p>When it comes to fitness, there is nothing that can beat yoga, which is packed with physical and mental health benefits. It can help you fight diseases.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ April 08 2021</h6>
        </div>
        </div>
        </div>

        <div className="stories-card middle-card">
        <div className='stories-content-div'>
        <Link to='/hollywood/hollywood1'>Robert Pattinson recalls being embarrassed by Andrew, Eddie</Link>
        <p>Robert Pattinson recalled how fellow actors Andrew Garfield and Eddie Redmayne would often outdo him at auditions years ago.</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ July 26 2021</h6>
        </div>
        </div>
        </div>

        <div className="stories-card">
        <div className='stories-content-div'>
        <Link to='/technology/technology2'>Asus ExpertBook B1400 lineup comes to India</Link>
        <p>ASUS has launched their new ExpertBook B1400 lineup of business-oriented laptops in India. The device is powered by the latest 11th Gen Intel processors.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ December 22 2021</h6>
        </div>
        </div>
        </div>

        <div className="sec-row sec-row-display" id="sec">
        <div className="stories-card first-card">
        <div className='stories-content-div'>
        <Link to='/bollywood/bollywood5'>Gangubai becomes first Indian film to be marketed on global platform</Link>
        <p>Alia Bhatt is in the success of her film Gangubai Kathiawadi. The film marks the first collaboration between director Sanjay and Alia Bhatt.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 26 2022</h6>
        </div>
        </div>
        </div>

        <div className="stories-card middle-card">
        <div className='stories-content-div'>
        <Link to='/food/food1'>Spinach Can Turn Harmful if Consumed in Excess</Link>
        <p>Spinach is low in calories, loaded with healthy nutrients, rich in essential minerals, and vitamins like calcium, magnesium, iron, vitamin A, C, and K </p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ June 12 2021</h6>
        </div>
        </div>
        </div>

        <div className="stories-card">
        <div className='stories-content-div'>
        <Link to='/hollywood/hollywood6'>Ghostbusters director Ivan Reitman dies at 75</Link>
        <p>Ivan Reitman, the influential filmmaker and producer behind beloved comedies from Animal House to Ghostbusters, has died. Reitman died peacefully in his sleep Saturday night.</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ February 14 2022</h6>
        </div>
        </div>
        </div>

        </div>
    </div>
    <div className="viewmore-btn" onClick={viewclick}>
            <div className="view-icon"></div>
            <div className="view-text" id="view-content">view more</div>
        </div>
    </>
)
export default Lateststories