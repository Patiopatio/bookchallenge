import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Evaluation from "../components/Evaluation"
import Book from '../components/Book';


class User extends Component {
  constructor(props) {
    super(props)
    this.state={
      books: [{
        title: "Harry Potter 1",
        isbn: '978-3551557414'
      },
      {
        title: "Harry Potter 2",
        isbn: '978-3551557421'
      }],
      evaluations:[{
        rating: "4",
        review: "I read the books as a teenager and everything JK "+
        "writes is fantastic. I am currently rereading them "+
        "in german since I learned it a long time ago and wanted "+
        "to keep at least part of my language skills. With and "+
        "engaging and captivating story and just the right level "+
        "of advanced vocabulary, theses books are a great way to "+
        "keep your german alive!",
      }]
    }
  }
  render() {
    return (
      <div>
        <h2>Your Profile</h2>
        <Row>
        <div className="col-xs-12 col-sm-6">
          <div className="card-deck">
            {this.state.books.map((book, index) =>
              <Book book={book} key={index} />
            )}
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          {this.state.evaluations.map((evaluation, index) =>
            <Col xs="12" key={index} className="mt-4">
              <Evaluation evaluation={evaluation} />
            </Col>
            )}
        </div>
        </Row>

      </div>
    )
  }
}

export default User
