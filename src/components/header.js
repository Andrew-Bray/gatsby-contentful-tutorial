import React from 'react'
import { Link } from 'gatsby'

import * as styles from './header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link className={styles.title} to="/">Andrew's Gatsby miracle website</Link>
        </div>
        <div >
          <ul className={styles.navList}>
            <li><Link 
              className={styles.navItem} 
              activeClassName={styles.activeNavItem} 
              to='/'>Home</Link></li>
          
            <li><Link 
              className={styles.navItem} 
              activeClassName={styles.activeNavItem} 
              to='/about'>About Me</Link></li>
            <li><Link 
              className={styles.navItem} 
              activeClassName={styles.activeNavItem} 
              to='/contact'>Contact</Link></li>
            <li><Link 
              className={styles.navItem} 
              activeClassName={styles.activeNavItem} 
              to='/blog'>Blog</Link></li>
        </ul>
        </div>
      </header>
    </>
  )
}

export default Header
