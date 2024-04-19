import React  from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen,toggleMenu}) => {
    return (
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <img className='logo' src="./assets/images/port2.webp" alt="" />
                <ul>
                    <li>
                        <a href='' className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href='' className='menu-item'>Education</a>
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
            </div>
            <ul></ul>
        </div>
        </>
    )
}

export default MobileNav