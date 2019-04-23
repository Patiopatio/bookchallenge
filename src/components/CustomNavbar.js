import React, { Component } from 'react';
import ReactDOM from 'react'
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown,
DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Book Challenge</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/books">Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/books/1">Book Details</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bookAdd">Add Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user">User</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default CustomNavbar
