import React, {Component} from 'react';

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      books: [{
        title: "bla",
        ISBN: 1
      }],
      books: [{
        title: "ble",
        ISBN: 2
      }],
      books: [{
        title: "blo",
        ISBN: 3
      }],


    }
  }


    render() {
      return (
        <div>
          <h2>Books</h2>
        </div>
      )
    }
  }

export default BookList
