import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'



const BlogPage = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  const postings = data.allMarkdownRemark.edges.map((edge) => {
      return (
        <li>
          <Link to={`/blog/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html: edge.node.html}} />
        </li>
      )
    })
  

  return (
    <Layout>
      <h2>
        This is my Blog page
      </h2>
      <ol>
        {postings}
      </ol>
    </Layout>
  )
}

export default BlogPage
