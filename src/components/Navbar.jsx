import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Navbar.css'
import { Link, Element } from "react-scroll";

export default function Navbar() {
  return (
    <nav className='navbar-container'>
        <div className="navbar-content-wrapper">
            <div className="navbar-leftside">
                <h3 className='main-heading'>Arnav Anand</h3>
            </div>
            <div className="navbar-middle">
                <Link to='home' offset={-30} smooth={true} duration={500}>Home</Link>
                <Link to='skills' offset={-70} smooth={true} duration={500}>Skills</Link>
                <Link to='projects-section-id' offset={-70} smooth={true} duration={500}>Projects</Link>
            </div>
            <div className="navbar-rightside">
                <a href="https://www.linkedin.com/in/arnav-anand-056710315/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='linkedin-icon'/></a>
                <a href="https://github.com/arnavanand2005" target="_blank" rel="noopener noreferrer"><GitHubIcon className='github-icon'/></a>
                <Link to="contact-section" offset={-70} smooth={true} duration={500} className='contact-btn'>Lets Connect</Link>
            </div>
        </div> 
    </nav>
  )
}