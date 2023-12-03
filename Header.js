import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
     
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>

            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/add-course'>AddCourse</Link>
            </li>

            <li>
              <Link to='/update/:id'>UpdateCourse</Link>
            </li>

            <li>
              <Link to='/view-courses'>Allcourses</Link>
            </li>

            <li>
            <Link to='/About'>About</Link>
          </li>
            
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
            
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
