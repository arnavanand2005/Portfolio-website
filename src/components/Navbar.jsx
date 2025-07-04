import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Navbar.css'
import { Link, Element } from "react-scroll";

export default function Navbar() {
  return (
    <nav className='navbar-container'>
        <div className="navbar-leftside">
            <h3 className='main-heading'>Arnav Anand</h3>
        </div>
        <div className="navbar-middle">
            <p>Home</p>
            <p>Skills</p>
            <p>Projects</p>
        </div>
        <div className="navbar-rightside">
            <a href="https://www.linkedin.com/in/arnav-anand-056710315/"><LinkedInIcon className='linkedin-icon'/></a>
            <a href="https://github.com/arnavanand2005"><GitHubIcon className='github-icon'/></a>
            <Link to="contact-section" offset={-70} smooth={true} duration={500} className='contact-btn'>Lets Connect</Link>
        </div>
    </nav>
  )
}
