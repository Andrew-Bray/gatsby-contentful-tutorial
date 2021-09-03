import React from 'react'
 import Layout from '../components/layout'

 import Head from '../components/head'
 import FadeIn from 'react-fade-in'

const Contact = () => {
  return (
      <Layout>
        <Head title="Contact"/>
        <FadeIn>
        <h2>This is my Contact Page</h2>
        <p> You can connect with me at <a href="https://www.linkedin.com/in/andrew-michael-bray" target="_blank" rel="noopener noreferrer">Linked In</a>
        </p>
        <p> and You can see my code at <a href='https://github.com/andrew-bray' target='_blank' rel="noopener noreferrer">my GitHub Page</a>
        </p>
        </FadeIn>
      </Layout>
  )
}

export default Contact
