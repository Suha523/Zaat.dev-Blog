const {path}  =require('path')
const { slugify } = require('./src/util/utilityFunctions')

// const { node } = require('prop-types')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField} = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

exports.createPages =({actions,graphql})=>{
    const{createPage} =actions
    const SinglePostTemplate = require.resolve('./src/templates/single-post.js')
    return graphql(`
    {
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        author
                        
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `).then(result=>{
        if(result.errors) return Promise.reject(result.errors)
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({node}) =>{
            createPage({
                path: `/${node.fields.slug}/`,
                component: SinglePostTemplate,
                context:{
                    slug: node.fields.slug
                }
            })
        })
    })
}


