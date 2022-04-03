import React from "react";
import Toppost from "./toppost";
import {Link} from "react-router-dom"
function handleclick(){
document.getElementById("card-display").classList.toggle("toggle");
document.getElementById("card-display1").classList.toggle("toggle1");
var text =document.getElementById("btn-content");
if(document.getElementById("card-display").classList.contains("toggle")){
    text.innerText="load more";
}
else{
    text.innerText="load less";
}
}
const Add = () =>(
    <>
    <div className='la-heading'>
        <h1 className='la-h1'>Latest </h1>
        <h1 className='la-h2'>Articles</h1>
    </div>
    <div className="art-con">
    <div className="art-cards-con hm">

       <div className="artcards">
        <div className="artcardimg art-card-img1"></div>
        <div className="art-card-content">
        <Link to='/technology/technology1'>Realme 9 Pro series to launch on February</Link>
        <p>Realme today announced that its next number series mid-range smartphones, the Realme 9 Pro series, will be launching on February 16.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ February 3 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards">
        <div className="artcardimg art-card-img2"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood1'>Robert Pattinson recalls being embarrassed by Andrew, Eddie</Link>
        <p>Robert Pattinson recalled how fellow actors Andrew Garfield and Eddie Redmayne would often outdo him at auditions years ago.</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ July 26 2021</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg art-card-img3"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness3'>Here’s a 15-minute full body workout for people of all ages</Link>
        <p>Fitness is a mindset– a journey in itself where you have to stay motivated and determined to achieve the goals that you set for yourself.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 12 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg art-card-img4"></div>
        <div className="art-card-content">
        <Link to='/food/food2'>Kombucha For Your Gut</Link>
        <p>Kombucha is a fermented, fizzy, sweet, and sour tea that has been consumed for thousands of years</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ February 13 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg art-card-img5"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood2'>The Internet Is Busy Crushing On Madhuri Dixit In An LBD</Link>
        <p>A black dress can go a long way to define one's sartorial choices.She has posted her photos in a stunning black midi dress.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 3 2022</h6>
        </div>
        </div>
        </div> 

        <div className="loadmore-btn"onClick={handleclick}>
            <div className="ld-icon" id="icon"></div>
            <div className="ld-text" id="btn-content">load more</div>
        </div>
        <Link to='/hollywood/hollywood2' className='gallery'>
            <h2>Wonder Woman 1984</h2>
            <p>Hollywood / November 26 2020</p>
      </Link>
    </div>
    <div className="top-posts-con">
    <div className="add-img"></div>
    <Toppost />
    </div>
    </div>
    </>
)
export default Add