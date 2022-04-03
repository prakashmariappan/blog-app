import React from "react";
import Contentheader from "../contentheader";
import {Link} from "react-router-dom";
import Float from "../floaticons";
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
const Bollywood6 = ()=> (
 <>
 <Contentheader/>
 <div className="content-divider">
    <h1>Actor Karanvir is the fifth contestant of reality show Lock Upp</h1>
    <div className="deatils-con">
       <div className="author">
          <div className="profile"></div>
          <div className="name">
            <p className="nm">Author Name</p>
            <p className="name-date">February 26 2022 - 10 min read</p>
          </div>
       </div>
       <div className="social"></div>
       <div className="content-img bl-card-img6"></div>
       <p  className="content-desc">Kangana Ranaut's upcoming captive reality show 'Lock Upp: Badass Jail Atyaachaari Khel' has sent shockwaves with its challenging format.</p>
       <div className="content-tags">
          <p className="tags">Bollywood</p>
          <p className="tags">Movies</p>
          <p className="tags">Annoncement</p>
       </div>
       <div className="content-clap">
          <div className="clap-img"></div>
          <p className="claps">9.3K claps</p>
       </div>
       </div>
       <div>
       <div className="written">
          <div className="profile"></div>
          <div className="name">
             <p className="wb">Written by</p>
            <p className="nm">Author Name</p>
            <p className="name-date">February 26 2022 - 10 min read</p>
          </div>
       </div>
       </div>
       <Float />
 </div>
 <div className="left-content-con con-width">
     <div className='bl-heading'>
        <h1 className='bl-h1'>More from the siren</h1>
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


        <div className="artcards-last toggle" id="card-display">
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

        <div className="content-btn"onClick={handleclick}>
            <div className="ld-icon" id="icon"></div>
            <div className="ld-text" id="btn-content">load more</div>
        </div>
        
    </div>
</div>
 </>
)
export default Bollywood6