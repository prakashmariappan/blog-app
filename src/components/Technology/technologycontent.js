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
const Technologycontent = ()=> (
 <>
 <div className="content-con">

 <div className="left-content-con">
     <div className='bl-heading'>
        <h1 className='bl-h1'>Tech</h1>
        <h1 className='bl-h2'>nology</h1>
    </div>

    <div className="art-cards-con">
    <div className="artcards">
        <div className="artcardimg tch-card-img1"></div>
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
        <div className="artcardimg tch-card-img2"></div>
        <div className="art-card-content">
        <Link to='/technology/technology2'>Asus ExpertBook B1400 lineup comes to India</Link>
        <p>ASUS has launched their new ExpertBook B1400 lineup of business-oriented laptops in India with the latest 11th Gen Intel processors.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ December 22 2021</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg tch-card-img3"></div>
        <div className="art-card-content">
        <Link to='/technology/technology3'>Ukraine invasion: Russia restricts social media access</Link>
        <p>The company said "We're aware that Twitter is being restricted for some people in Russia and are working to keep our services safe".</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ February 27 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg tch-card-img4"></div>
        <div className="art-card-content">
        <Link to='/technology/technology4'>Millions in Bitcoin pouring into Ukraine from donors</Link>
        <p>Cryptocurrency analysts say at least $11m has so far been donated to the Ukrainian war effort through anonymous Bitcoin donations.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ February 27 2022</h6>
        </div>
        </div>
        </div> 

        <div className="artcards">
        <div className="artcardimg tch-card-img5"></div>
        <div className="art-card-content">
        <Link to='/technology/technology5'>NHS Scotland's Covid Status app criticised over privacy failings</Link>
        <p>The NHS Scotland Covid Status app failed to provide people with clear details about how their personal information was being used.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ February 20 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg tch-card-img6"></div>
        <div className="art-card-content">
        <Link to='/technology/technology6'>Samsung apologises for Russian app download error</Link>
        <p>Samsung has apologised for a update sent to UK customers stating Russian government-mandated apps had been downloaded</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ October 08 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg tch-card-img7"></div>
        <div className="art-card-content">
        <Link to='/technology/technology7'>Windows 11 launches with redesigned start menu</Link>
        <p>Windows 11, the latest version of Microsoft's computer operating system, launches worldwide as a free upgrade for Windows 10 users.</p>
        <div className='la-field'>
            <h5>Technology</h5>
            <h6>/ October 05 2021</h6>
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
export default Technologycontent