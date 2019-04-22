import React, {Component} from 'react';

class BookDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      book: {
        title: 'title ',
        ISBN: ' 647h',
        evaluations: [{
          rating: 4,
          review: "good",
        }]
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
          <div>
            {this.state.book.evaluations.map((evaluation) =>
              <div>{evaluation.rating} - {evaluation.review}</div>
            )}
          </div>
        </div>
      )
    }
}

export default BookDetails
