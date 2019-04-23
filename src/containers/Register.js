import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

  register = () => {
    this.props.history.push('/user')
  }

  goBack = () => {
    this.props.history.goBack()
  }

handleChange = event => {
  const {name, value} = event.target
  this.setState({
    user: {
      [name]: value,
    }
  })
}

  render() {
    return (
      <div>
      <h2>Register</h2>
      <Row className='d-flex justify-content-center'>
        <Col xs="6">
        <Form>
          <FormGroup>
            <Label fro="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username" />
          </FormGroup>
          <FormGroup>
            <Label fro="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="Password" />
          </FormGroup>

          <input type="button"
            value="Register"
            className="btn btn-outline-info mr-2"
            onClick={this.register} />
          <input type="button"
            value="Cancel"
            className="btn btn-outline-danger"
            onClick={this.goBack} />
        </Form>
        </Col>
      </Row>
      </div>
    )
  }
}

export default Register
