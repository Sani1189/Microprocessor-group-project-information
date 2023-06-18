import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav-scroll' >
        <NavLink key="home" to="/" className="NavLink home-s" end>NovaScriptors</NavLink>
        <NavLink key="member" to="/member" className="NavLink">Member</NavLink>
        <NavLink key="instuctor" to="/instuctor" className="NavLink">Instuctor</NavLink>
        <NavLink key="preSurvey" to="/preSurvey" className="NavLink">PreSurvey</NavLink>
        <NavLink key="postSurvey" to="/postSurvey" className="NavLink">PostSurvey</NavLink>
        <NavLink key="ganttChart" to="/ganttChart" className="NavLink">GanttChart</NavLink>
        <NavLink key="about" to="/about" className="NavLink">About</NavLink>

    </nav>
  )
}

export default Navbar