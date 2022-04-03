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
const Foodcontent = ()=> (
 <>
 <div className="content-con">

 <div className="left-content-con">
     <div className='bl-heading'>
        <h1 className='bl-h1'>Fo</h1>
        <h1 className='bl-h2'>od</h1>
    </div>

    <div className="art-cards-con">
    <div className="artcards">
        <div className="artcardimg fd-card-img1"></div>
        <div className="art-card-content">
        <Link to='/food/food1'>Spinach Can Turn Harmful if Consumed in Excess</Link>
        <p>Spinach is low in calories, loaded with healthy nutrients, rich in essential minerals, and vitamins.</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ June 12 2021</h6>
        </div>
        </div>
        </div>

        <div className="artcards">
        <div className="artcardimg fd-card-img2"></div>
        <div className="art-card-content">
        <Link to='/food/food2'>Kombucha For Your Gut</Link>
        <p>Kombucha is a fermented, fizzy, sweet, and sour tea that has been consumed for thousands of years</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ February 13 2022</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg fd-card-img3"></div>
        <div className="art-card-content">
        <Link to='/food/food3'>Beef is wow-worthy when...</Link>
        <p>Beef is wow-worthy when mixed with honey Slice the beef into small pieces and cook the beef with salt.</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ February 18 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg fd-card-img4"></div>
        <div className="art-card-content">
        <Link to='/food/food4'>WFU’s Office of Wellbeing offering healthy eating tips</Link>
        <p>Wake Forest senior Erik Schultz doesn’t want to develop poor eating habits while he’s back at home in Asheboro sheltering.</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ April 20 2020</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg fd-card-img5"></div>
        <div className="art-card-content">
        <Link to='/food/food5'>The Fruitarian Diet: Is It Good or Bad For You?</Link>
        <p>Dietitians can provide great advice when it comes to losing weight, nutritional plans and addressing lifestyles factors.</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ March 12 2021</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg fd-card-img6"></div>
        <div className="art-card-content">
        <Link to='/food/food6'>Mediterranean Diet : A Meal Plan and Beginner’s Guide</Link>
        <p>The Mediterranean diet is based on the traditional foods that people used to eat in countries bordering the Mediterranean Sea.</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ September 06 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg fd-card-img7"></div>
        <div className="art-card-content">
        <Link to='/food/food7'>Looking for summer drinks? Try out this cinnamon cold brew coffee</Link>
        <p>Refreshing iced coffee sweetened with the flavours of brown sugar and cinnamon sounds divine, doesn't it?</p>
        <div className='la-field'>
            <h5>Food</h5>
            <h6>/ June 18 2020</h6>
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
export default Foodcontent