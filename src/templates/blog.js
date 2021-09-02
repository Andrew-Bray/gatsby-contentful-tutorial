import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// NON_WORKING FEATURE, REPLACED BY renderRichText
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Head from '../components/head'


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {

// STRANGE SOLUTION TO WORK WITH renderRichText
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
            <>
            {/* <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre> */}
            <img
              src={node.data.target.fixed.src}
              alt={node.data.target.title}
            />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {/*Feature below renders 'options' */}
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog
