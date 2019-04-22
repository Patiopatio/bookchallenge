import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <div>
        <h2>User</h2>
        <div>
          <Link to="/bookAdd">Add Book</Link>
        </div>
      </div>
    )
  }
}

export default User
