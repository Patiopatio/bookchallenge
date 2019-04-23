import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import bookCover from '../images/book1.jpeg';

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      books: [{
        title: "Harry Potter 1",
        isbn: '978-3551557414'
      },
      {
        title: "Harry Potter 2",
        isbn: '978-3551557421'
      },
      {
        title: "Harry Potter 3",
        isbn: '978-3551557438'
      }],
    }
  }

    render() {
      return (
        <div>
          <h2>Books</h2>
          <div className="card-deck">
            {this.state.books.map((book, index) =>
              <Card key={index}>
                <CardImg top width="100%" src={bookCover} alt="No cover available" />
                <CardBody>
                  <CardTitle classname="front-weight-bold">{book.title}</CardTitle>
                  <CardSubtitle>ISBN: {book.isbn}
                  </CardSubtitle>
                  <Link to="/books/1">See Evaluations</Link>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      )
    }
  }

export default BookList
