import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/logo.png'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar-container'>
        <div className="navbar-leftside">
            <img src={logo} alt="Arnav's logo"/>
        </div>
        <div className="navbar-rightside">
            <LinkedInIcon className='linkedin-icon'/>
            <GitHubIcon className='github-icon'/>
        </div>
    </nav>
  )
}
