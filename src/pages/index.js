import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import { graphql, StaticQuery } from 'gatsby'
import '../styels/style.css'
// import singlepost from '../templates/single-post'


const IndexPage = ({data}) =>
 
 { 

   console.log(data.allMarkdownRemark);
   return(
  <Layout>
    <Seo title="Home" />
    <h1 className="mb-5 text-green">Blog</h1>
    {data.allMarkdownRemark.edges.map(({node})=> 
    <div >
      
        <Post title={node.frontmatter.title}
        date={node.frontmatter.date}
        description={node.frontmatter.description}
        author={node.frontmatter.author}
        author_title={node.frontmatter.author_title}
        author_company={node.frontmatter.author_company}
        author_twitter={node.frontmatter.author_twitter}
        author_github={node.frontmatter.author_github}
        fluid={node.frontmatter.image.childImageSharp.fluid}
        tags={node.frontmatter.tags}
        issue_number={node.frontmatter.issue_number}
        body={node.excerpt}
        time_to_read={node.timeToRead}
        slug = {node.fields.slug}
        />
        {/* <singlepost data={data}/> */}
        </div>
)}

    
  </Layout>
);
    }


export const indexQuery = graphql`
   query{
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/blog/" } }) 
{
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "MM/DD/YYYY")
            author_twitter
            author_title
            author_company
            author
            author_github
            description
            issue_number
            image {
              childImageSharp {
                fluid(maxWidth: 600 , maxHeight: 200) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
        }`

export default IndexPage
