import React, {Component} from 'react';
import {FormGroup, Label, Input, Row, Col} from 'reactstrap';
import bookCover from "../images/book1.jpeg";


class BookAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookToAdd: {
        title: '',
        ISBN: '',
      }
    }
  }

  handleChange = event => {
      const {name, value} = event.target
      this.setState ({
        bookToAdd: {[name]: value,}

      })
    }
    addBook = () => {
      console.log(this.state)
      this.props.history.push('/user')
    }


  render() {
    return (
      <div>
        <h2>Book Add</h2>
        <Row className='d-flex justify-content-center'>
          <Col xs="3">
          <img src={bookCover} className="img-rounded img-thumbnail" alt="Book Cover" />
          </Col>
          <Col xs="9">
            <FormGroup>
              <Label fro="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={this.state.bookToAdd.title}
                onchange={this.handelChange}
                placeholder="Enter the title here"
                id="title" />
            </FormGroup>
            <FormGroup>
              <Label fro="isbn">ISBN</Label>
              <Input
                type="text"
                name="isbn"
                value={this.state.bookToAdd.isbn}
                onchange={this.handelChange}
                placeholder="978-1-56619-909-4 "
                id="isbn" />
            </FormGroup>
            <input type="button"
              value="Cancel"
              className="btn btn-outline-danger mr-2"
              onClick={this.goBack} />
            <input type="button"
              value="Add Book"
              className="btn btn-outline-info"
              onClick={this.addBook} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default BookAdd
