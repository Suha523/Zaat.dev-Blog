import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Badge, Row, Col,
} from 'reactstrap';
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunctions'
import {Link} from 'gatsby'

const Post = ({title, date, description, author,author_title,
              author_company, author_twitter,author_github,fluid,
              tags, issue_number,body,time_to_read,slug}) => {
                let tagsArr =tags.split(',');
                console.log(tagsArr)
  return (
    <div>
     {/* <Row>
       <Col md="6"> */}
      <Card  className="mb-4">
      <Img className="card-img-top" fluid={fluid} />
        <CardBody>
          <CardTitle  tag="h5">
            <Link to={slug} className="text-green">{title}</Link>
          </CardTitle>
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
              <span className="date">{date} - {time_to_read} min read</span>
          </CardSubtitle>
          <CardText>{description}</CardText>
          <CardText>{body}</CardText>
          <Link to={slug} className="btn btn-outline-success ">Read More</Link>
          
        </CardBody>
      </Card>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default Post;