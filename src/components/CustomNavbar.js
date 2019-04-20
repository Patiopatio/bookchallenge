import React, { Component } from 'react';
import ReactDOM from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';

class CustomNavbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Book Challenge</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}

export default CustomNavbar
