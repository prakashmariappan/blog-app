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
const Fitness5 = ()=> (
 <>
 <Contentheader/>
 <div className="content-divider">
    <h1>Half of Americans Suffer from Gym Anxiety</h1>
    <div className="deatils-con">
       <div className="author">
          <div className="profile"></div>
          <div className="name">
            <p className="nm">Author Name</p>
            <p className="name-date">August 09 2020 - 10 min read</p>
          </div>
       </div>
       <div className="social"></div>
       <div className="content-img ft-card-img5"></div>
       <p  className="content-desc">At least 50% of Americans are intimidated to visit a gym, 24 Hour Fitness and fitness apps are trying to make working out easier.</p>
       <div className="content-tags">
          <p className="tags">Fitness</p>
          <p className="tags">Health</p>
          <p className="tags">Exercise</p>
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
            <p className="name-date">August 09 2020 - 10 min read</p>
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
        <div className="artcardimg ft-card-img1"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness1'>Just 10 minutes of daily exercise can benefit those over 40</Link>
        <p>Regular exercise plays an essential role in maintaining one’s health. Now, a research has also said that just 10 minutes of physical activity.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 2 2022</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg ft-card-img2"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness2'>Are you guilty of making these five common yoga mistakes?</Link>
        <p>When it comes to fitness, there is nothing that can beat yoga, which is packed with physical and mental health benefits.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ April 08 2021</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg ft-card-img3"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness3'>Here’s a 15-minute full body workout for people of all ages</Link>
        <p>Fitness is a mindset– a journey in itself where you have to stay motivated and determined to achieve the goals that you set for yourself.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 12 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg ft-card-img4"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness4'>Woman crushed to death while trying to lift 180kg barbell</Link>
        <p>Lifting weights is a common exercise. However, a woman was crushed to death while trying to lift almost 180 kg of barbell weight in a gym.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 24 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg ft-card-img6"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness6'>Yoga classes for Delhi Covid patients under home isolation</Link>
        <p>Under the ‘Delhi ki Yogshala" programme and 40,000 Covid-19 patients in home isolation can attend these online yoga classes.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 26 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg ft-card-img7"></div>
        <div className="art-card-content">
        <Link to='/fitness/fitness7'>Classic Physique Champ Chris Bumstead</Link>
        <p>CBum talks about his rapid rise in popularity, his thoughts on his performance and he'll ever compete in the Open.</p>
        <div className='la-field'>
            <h5>Fitness</h5>
            <h6>/ February 25 2021</h6>
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
export default Fitness5