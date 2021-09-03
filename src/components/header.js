import React from 'react'
import {  Link } from 'gatsby'

import * as styles from './header.module.scss';

const Header = () => {
  // const data = useStaticQuery(graphql`
  // query {
  // site {
  // 	siteMetadata {
	// 		title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.title} to="/">
          Hello! I'm Andrew Bray
        </Link>
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
              to='/blog'>Projects</Link></li>
        </ul>
        </div>
        
      </header>
    </>
  )
}

export default Header
