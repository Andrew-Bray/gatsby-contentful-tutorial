import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

import * as blogStyles from './blog.module.scss'



const BlogPage = () => {

  // const data = useStaticQuery(graphql`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             date
  //             title
  //           }
  //           html
  //           excerpt
  //         }
  //       }
  //     }
  //   }
  // `);

const data = useStaticQuery(graphql`
query {
  allContentfulBlogPost (sort: {
    fields:publishedDate,
    order:DESC
  }) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
        body {
          raw
        }
      }
    }
  }
}`)

  const postings = data.allContentfulBlogPost.edges.map((edge) => {
    const body = JSON.parse(edge.node.body.raw)
    console.log(body);
      return (
        <li className={blogStyles.post}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title}</h2>
          
            <p>{edge.node.publishedDate}</p>
            <div dangerouslySetInnerHTML={{__html: edge.node.html}} />
          </Link>
        </li>
      )
    })
  

  return (
    <Layout>
      <h2>
        This is my Blog page
      </h2>
      <ol className={blogStyles.posts}>
        {postings}
      </ol>
    </Layout>
  )
}

export default BlogPage
