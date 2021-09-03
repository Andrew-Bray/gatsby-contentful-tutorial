import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

import FadeIn from 'react-fade-in'


const AboutMe = () => {
  return (
    <Layout>
      <Head title="About Me"/>
      <FadeIn>
      <h2>Nice to meet you</h2>
      <p>I am a multi-disciplinary software engineer with a soft-spot for continuous learning. I am a huge advocate for the inspiring team experience, and believe that the best day at work is the day where everyone has learned something new and at least one person snorted while laughing.</p>
      <p>My background gives me a wealth of experience on diverse, multidisciplinary, creative-minded teams where space is made both for quality and for fast-paced delivery of product. (Yes, among other skills sets, this is a reference to having participated in hundreds of theatrical “tech weeks”.)</p>
      <p>When I’m not at work, you can probably find me tending to my beehives (yes, ask nicely and you'll get a jar of honey!), playing frisbee, or improvising a recipe in the kitchen.</p>
      <h4>Ally is a verb. Let's actively seek more opportunities to learn how to do better!</h4>
      <p>Need a developer? <Link to="/contact"> Contact Me.</Link>
      </p>
      </FadeIn>
     </Layout>
  )
}

export default AboutMe