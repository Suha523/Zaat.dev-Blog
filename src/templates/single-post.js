import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Badge
} from 'reactstrap';
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {slugify} from '../util/utilityFunctions'
import {graphql, Link} from 'gatsby'


const SinglePost = ({data}) => {
   
    const post = data.markdownRemark;
    let tagsArr =post.frontmatter.tags.split(',');
    console.log(tagsArr)
  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      {/* <div dangerouslySetInnerHTML={{ __html: post.frontmatter.html }} /> */}
      <Card  className="mb-4 mt-4">
      <Img className="card-img-top" fluid={post.frontmatter.image.childImageSharp.fluid} />
        <CardBody>
          <CardTitle className="text-green" tag="h5">{post.frontmatter.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
              <ul className="list-unstyled">
                {tagsArr.map(tag => (
                  <li className="d-inline-block ml-2">
                    <Link to={`/tag/${slugify(tag)}`}>
                        <Badge color="success"> #{tag} </Badge>
                    </Link>
                  </li>
                ))}
              </ul>
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
              <span className="date">Published On: {post.frontmatter.date}</span>
          </CardSubtitle>
          <CardText>By: {post.frontmatter.author}</CardText>
          {/* <CardText>{post.author}</CardText>
          <CardText>{post.description}</CardText> */}
          <CardText>{post.frontmatter.description}</CardText>
          <CardText>{post.excerpt}</CardText>
          {/* <CardLink to="#" className="btn btn-outline-success ">Read More</CardLink> */}
          
        </CardBody>
      </Card>
      </Layout>
  );
};

export const query = graphql`
      query($slug:String!){
          markdownRemark(fields:{slug: {eq: $slug}}){
              html
              frontmatter{
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
                excerpt(pruneLength: 30000)
          }
      }
`

export default SinglePost;