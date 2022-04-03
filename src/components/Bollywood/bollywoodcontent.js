import React from "react";
import Toppost from "../toppost";
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
const Bollywoodcontent = ()=> (
 <>
 <div className="content-con">

 <div className="left-content-con">
     <div className='bl-heading'>
        <h1 className='bl-h1'>Bolly</h1>
        <h1 className='bl-h2'>wood</h1>
    </div>

    <div className="art-cards-con">
    <div className="artcards">
        <div className="artcardimg bl-card-img1"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood1'>Akshay Kumar & Emraan Hashmi's Film To Arrive Directly On OTT?</Link>
        <p>Remakes have become a norm in Bollywood as most of them have worked exceptionally well in the past.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 3 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards">
        <div className="artcardimg bl-card-img2"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood2'>The Internet Is Busy Crushing On Madhuri Dixit In An LBD</Link>
        <p>A black dress can go a long way to define one's sartorial choices.She has posted her photos in a stunning black midi dress.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 3 2022</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg bl-card-img3"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood3'>Sara flies to Rajkot for the shoot of her upcoming film Gaslight</Link>
        <p>Riding high on the success of her last release Aanand L Rai’s Atrangi featuring Sara Ali Khan will be next seen in an project titled Gaslight.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 27 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg bl-card-img4"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood4'>Salman Khan returns to Mumbai after a successful Da-Bangg tour in Dubai</Link>
        <p>Superstar Salman Khan set the stage on fire on Friday night in Dubai at Expo 2020 as part of the Da-Bangg tour.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 27 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg bl-card-img5"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood5'>Gangubai becomes first Indian film to be marketed on global platform</Link>
        <p>Alia Bhatt is in the success of her film Gangubai Kathiawadi. The film marks the first collaboration between director Sanjay and Alia Bhatt.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 26 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg bl-card-img6"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood6'>Actor Karanvir is the fifth contestant of reality show Lock Upp</Link>
        <p>Kangana Ranaut's upcoming captive reality show 'Lock Upp: Badass Jail Atyaachaari Khel' has sent shockwaves with its challenging format.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 26 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg bl-card-img7"></div>
        <div className="art-card-content">
        <Link to='/bollywood/bollywood7'>Raashii Khanna begins shoot of next schedule for Yodha</Link>
        <p>Creating waves across industries, Raashii Khanna is busy hopping sets and running around the clock one film after another.</p>
        <div className='la-field'>
            <h5>Bollywood</h5>
            <h6>/ February 25 2022</h6>
        </div>
        </div>
        </div> 

        <div className="loadmore-btn"onClick={handleclick}>
            <div className="ld-icon" id="icon"></div>
            <div className="ld-text" id="btn-content">load more</div>
        </div>
        
    </div>
</div>
<div className="right-content-con">
    <Toppost />
    <div className="add-img"></div>
</div>
 </div>
 
 </>
)
export default Bollywoodcontent