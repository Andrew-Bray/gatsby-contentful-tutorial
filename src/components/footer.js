import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'

import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            author
        }
      }
    }
  `)

console.log(data);
  return (
    <footer className={footerStyles.footer}>
      <p>Proudly created with Gatsby by {data.site.siteMetadata.author} © 2021</p>
      <p style={{ fontSize: ".7rem"}}>Visit the 
        <Link to="https://github.com/Andrew-Bray/gatsby-contentful-tutorial"
              target="_blank" rel="noopener noreferrer"
      > Source Code </Link>
      for this website</p>
    </footer>
  )
}

export default Footer
