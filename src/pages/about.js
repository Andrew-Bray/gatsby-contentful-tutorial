import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutMe = () => {
  return (
    <Layout>
      <h2>Hello</h2>
      <h3>I'm Andrew, I'm a ful stack developer, and this is my website creation</h3>
      <p>Need a developer? <Link to="/contact"> Contact Me.</Link>
      </p>
     </Layout>
  )
}

export default AboutMe