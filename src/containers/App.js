import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Container} from 'reactstrap';

import './App.css';
import CustomNavbar from '../components/CustomNavbar';
import BookList from './BookList';
import BookDetails from './BookDetails';
import User from './User';
import BookAdd from './BookAdd';
import Login from './Login';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Container>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/books">Books</Link>
                  </li>
                  <li>
                    <Link to="/books/1">Book Details</Link>
                  </li>
                  <li>
                    <Link to="/user">User</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/books/1" component={BookDetails} />
                <Route path="/books" component={BookList} />
                <Route path="/user" component={User} />
                <Route path="/bookAdd" component={BookAdd} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={BookList} />

              </Switch>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
