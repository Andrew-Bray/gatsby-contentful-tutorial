import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import FadeIn from 'react-fade-in'

export default function Home() {
  return (
    <Layout>
      <Head title="Home"/>
      <FadeIn 
        transitionDuration={1000}
        delay={300}
        >
        <h2>software developer</h2>
         <h2>sound artist </h2>
         <h2>educator </h2>
         <h2>and beekeeper</h2>
      </FadeIn>
    </Layout>
    )
}
