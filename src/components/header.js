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
          <Link to='/'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </div>
      </header>
    </>
  )
}

export default Header
