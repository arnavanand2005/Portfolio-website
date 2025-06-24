import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Navbar.css'

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
            <LinkedInIcon className='linkedin-icon'/>
            <GitHubIcon className='github-icon'/>
            <button className='contact-btn'>Lets Connect</button>
        </div>
    </nav>
  )
}
