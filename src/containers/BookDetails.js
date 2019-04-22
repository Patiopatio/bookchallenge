import React, {Component} from 'react';

class BookDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      book: {
        title: 'title ',
        ISBN: ' 647h',
      }
    }
  }
    render() {
      return (
        <div>
          <h1>
            Book Details
          </h1>
          <div>
          {this.state.book.title}
          </div>
        </div>
      )
    }
}

export default BookDetails
