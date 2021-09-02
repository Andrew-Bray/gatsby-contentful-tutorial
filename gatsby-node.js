const path = require('path')

//Nolonger needed for Contentful
// module.exports.onCreateNode = ({ node, actions}) => {
//   const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//       const slug = path.basename(node.fileAbsolutePath, '.md');
      
//       createNodeField({
//         node,
//         name: 'slug',
//         value: slug
//       })
//     }
// }

//a new API for making dynamically rendered pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}

