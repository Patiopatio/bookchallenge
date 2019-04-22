import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      books: [{
        title: "bla",
        ISBN: 1
      },
      {
        title: "ble",
        ISBN: 2
      },
      {
        title: "blo",
        ISBN: 3
      }],


    }
  }


    render() {
      return (
        <div>
          <h2>Books</h2>
            {this.state.books.map((book) =>
              <div>{book.title}  - {book.ISBN}
                <Link to="/books/1">Book1</Link>
              </div>
            )}
        </div>
      )
    }
  }

export default BookList
