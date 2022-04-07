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
const Hollywood4 = ()=> (
 <>
 <Contentheader/>
 <div className="content-divider">
    <h1>Scarlett Johansson is world's best-paid actress, Forbes says</h1>
    <div className="deatils-con">
       <div className="author">
          <div className="profile"></div>
          <div className="name">
            <p className="nm">Author Name</p>
            <p className="name-date">February 27 2022 - 10 min read</p>
          </div>
       </div>
       <div className="social"></div>
       <div className="content-img hl-card-img4"></div>
       <p  className="content-desc">Helping to save the world with The Avengers has helped Scarlett Johansson become the best-paid actress in the world.</p>
       <div className="content-tags">
          <p className="tags">Hollywood</p>
          <p className="tags">Movies</p>
          <p className="tags">Avengers</p>
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
            <p className="name-date">February 27 2022 - 10 min read</p>
          </div>
       </div>
       </div>
       <Float />
 </div>
 <div className="left-content-con con-width">
     <div className='bl-heading'>
        <h1 className='bl-h1 hd'>More from the siren</h1>
    </div>

    <div className="art-cards-con">
    

    <div className="artcards">
        <div className="artcardimg hl-card-img1"></div>
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
        <div className="artcardimg hl-card-img2"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood2'>Wonder Woman 1984</Link>
        <p>Wonder Woman 1984 will be released in cinemas in many international markets ahead of its US debut on the big screen and on HBO Max on 25 December</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ November 26 2020</h6>
        </div>
        </div>
        </div>  

        <div className="artcards">
        <div className="artcardimg hl-card-img3"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood3'>Spider-Man: No Way Home</Link>
        <p>Spider-Man: No Way Home might be getting a director’s cut soon. It has been two months since the Tom Holland starrer was released and now it is the third highest-grossing movie in US</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ February 17 2022</h6>
        </div>
        </div>
        </div> 
 

        <div className="artcards">
        <div className="artcardimg hl-card-img5"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood5'>Venom 2 release delayed to September</Link>
        <p>The release of Venom: Let There Be Carnage, starring Tom Hardy and Woody Harrelson, has pushed been back to September 17. </p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ February 26 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle" id="card-display">
        <div className="artcardimg hl-card-img6"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood6'>Ghostbusters director Ivan Reitman dies at 75</Link>
        <p>Ivan Reitman, the influential filmmaker and producer behind beloved comedies from Animal House to Ghostbusters, has died at 75.</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ February 14 2022</h6>
        </div>
        </div>
        </div>

        <div className="artcards-last toggle1" id="card-display1">
        <div className="artcardimg hl-card-img7"></div>
        <div className="art-card-content">
        <Link to='/hollywood/hollywood7'>Rosamund Pike to star in pandemic thriller Rich Flu</Link>
        <p>Rich Flu sees a strange disease killing off some of the richest and most influential people on the planet starting with the billionaires.</p>
        <div className='la-field'>
            <h5>Hollywood</h5>
            <h6>/ February 04 2022</h6>
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
export default Hollywood4