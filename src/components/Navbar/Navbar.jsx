import React from 'react'
import { useState } from 'react';
import "./Navbar.css"
import MobileNav from '../MobileNav/MobileNav';


const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false);
  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className="logo" src="./assets/images/port2.webp" alt=""/>
            <ul>
                <li>
                  <a href='' className='menu-item'>Home</a>
                </li>
                <li>
                  <a href='' className='menu-item'>Skills</a>
                </li>
                <li>
                  <a href='' className='menu-item'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>
                  Hire Me
                </button>
            </ul>
            <button class='menu-btn' onClick={toggleMenu}>
                <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    {openMenu ? "close" : "menu"}
                </span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar