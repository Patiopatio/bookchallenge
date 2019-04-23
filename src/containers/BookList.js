import React, {Component} from 'react';
import Book from '../components/Book';


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
              <Book book={book} key={index} />
            )}
          </div>
        </div>
      )
    }
  }

export default BookList
