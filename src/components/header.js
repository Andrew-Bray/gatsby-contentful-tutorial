import React from 'react'
import { Link } from 'gatsby'
const Header = () => {
  return (
    <>
      <header>
        <div>
          <h1 style={{ textAlign: 'center'}}>Andrew's Gatsby miracle website</h1>
        </div>
        <div className="links" style={{ display: "flex", justifyContent: "space-around" }}>
          <ul>
            <li><Link to='/'>Home</Link></li>
          
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
        </div>
      </header>
    </>
  )
}

export default Header
