import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {

   const [ismobile, SetIsMobile]= useState(true);

   const mobileToggler = () => {
     SetIsMobile(!ismobile)
   }

  return (
    <nav>
      <div className="logo">
      <h1>Cash<span> AFLOAT</span></h1>
      </div>
      <div >
        <ul className={ismobile?"nav-items": "nav-items-close"} >
            <Link to= "/" className='home' >
            <li >Home</li>
            </Link>
            <Link to= "/about" className='about'>
            <li>About</li>
            </Link>
            <Link to= "/services" className='services'>
            <li >Services</li>
            </Link>
            <Link to= "/blog" className='blog'>
            <li >Blog</li>
            </Link>
            <Link to= "/signup" className='signup'>
            <li >Sign Up</li>
            </Link>
        </ul>
      </div>
      <button className='mobile' onClick={()=>mobileToggler()}>
           {ismobile? (<FaBars  />): 
           (<FaRegWindowClose/>)}
         </button>
    </nav>
  )
}

export default Navbar; 
