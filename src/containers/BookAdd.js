import React, {Component} from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

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
    submitForm = () => {
      console.log(this.state)
      this.props.history.push('/user')
      // this.props.handleSubmit(this.state)
      // this.setState(this.initialState)
    }


  render() {
    return (
      <div>
        <h2>Book Add</h2>
        <div>
          <FormGroup>
              <label>Title</label>
                <input
                type="text"
                name="Title"
                value={this.state.bookToAdd.title}
                onChange={this.handleChange} />
              <label>ISBN</label>
                <input
                type="text"
                name="ISBN"
                value={this.state.bookToAdd.ISBN}
                onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />

          </FormGroup>

        </div>
      </div>
    )
  }
}

export default BookAdd
