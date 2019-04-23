import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import bookCover from '../images/book1.jpeg';

class Book extends Component {
  render() {
    return (
      <Card>
        <CardImg top width="100%" src={bookCover} alt="No cover available" />
        <CardBody>
          <CardTitle classname="front-weight-bold">{this.props.book.title}</CardTitle>
          <CardSubtitle>ISBN: {this.props.book.isbn}
          </CardSubtitle>
          <Link to="/books/1">See Evaluations</Link>
        </CardBody>
      </Card>
    )
  }
}

export default Book
