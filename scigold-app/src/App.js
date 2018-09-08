import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Clouds } from './clouds';

class App extends Component {

  render() {
    return (
      <div className="App text-center">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Alexandria</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Discussion
            </NavItem>
            <NavItem eventKey={2} href="#">
              Workspace
            </NavItem>
            <NavItem eventKey={3} href="#">
              Archives
            </NavItem>
            <NavItem eventKey={4} href="#">
              Profile
            </NavItem>
          </Nav>
        </Navbar>;

        <form className="form-signin">
          <input type="text" id="inputEmail" class="form-control" placeholder="Search..." autofocus></input>

          <div className="form-group">
            <input type="file" className="form-control" id="exampleFormControlFile1"></input>
          </div>

          <LinkContainer to='/cloud'>
            <button className="btn btn-lg btn-light btn-block mt-5" type="submit">Submit</button>
          </LinkContainer>

        </form>
      </div>

    );
  }
}


export default App;
