import React, { Component } from 'react';
import './App.css';
import CustomNavbar from '../components/CustomNavbar';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import BookList from './BookList';
import BookDetails from './BookDetails';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
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
              </ul>
            </nav>
            <Switch>
              <Route path="/books/1" component={BookDetails} />
              <Route path="/books" component={BookList} />
              <Route path="/user" component={User} />
              <Route component={BookList} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
