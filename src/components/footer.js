import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
    <footer>
      <p>Created by {data.site.siteMetadata.author} © 2021</p>
    </footer>
  )
}

export default Footer
