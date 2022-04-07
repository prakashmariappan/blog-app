import React from 'react';
import { NavLink } from 'react-router-dom';
function nav(){
  document.getElementById("nav").classList.toggle("display");
}
const Header = () => (
    <>
    <div className='header-box'>
      <div className='title'>
          <p className='text1'>The</p>
          <p className='text2'>Siren</p>
      </div>
      <div className='hamburger' onClick={nav}></div>
      </div>
      <div className='nav-container display' id='nav'>
       <NavLink to='/'  activeClassName='active' className='link'>Home</NavLink>
       <NavLink to='/bollywood' activeClassName='active' className='link'>Bollywood</NavLink>
       <NavLink to='/technology' activeClassName='active' className='link'>Technology</NavLink>
       <NavLink to='/hollywood' activeClassName='active' className='link'>Hollywood</NavLink>
       <NavLink to='/fitness' activeClassName='active' className='link'>Fitness</NavLink>
       <NavLink to='/food' activeClassName='active' className='link'>Food</NavLink>
      </div>
      
    </>
  )
  
  export default Header