import React, { Component } from 'react';
import './App.css';
import CustomNavbar from '../components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <header className="App-header">
          header
        </header>
      </div>
    );
  }
}

export default App;
