import React from 'react'

import Header from './header'
import Footer from './footer'
import Sounds from './sound'

import "@fontsource/lato" // Defaults to weight 400 with all styles included.
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (

    <div className={layoutStyles.container}>
      <div className={layoutStyles.top}>
        <div>
          <Header/>
            <div className={layoutStyles.content}>
             {children}
            </div>
            <Footer/>
        </div>
      </div>
      <Sounds />
    </div>
    
  )
}

export default Layout
