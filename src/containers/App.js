import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light" ligth expand="md">
          <NavbarBrand href="/">Book Challenge</NavbarBrand>
        </Navbar>
        <header className="App-header">
          header
        </header>
      </div>
    );
  }
}

export default App;
