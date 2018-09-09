import * as React from 'react';
import './App.css';
import {
  Navbar, Nav, NavItem, FormControl,
  Form,
  InputGroup,
  Glyphicon, ButtonGroup
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cloud from './clouds'


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      hidden: true,
    };
  }

  handleClouds = event => {
    event.preventDefault();

    this.setState({
      hidden: true,
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleGlyphClick(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Router>
        <div className="App text-center">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Alexandria</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav className='navbar'>
              <NavItem className='nav-item' eventKey={1} href="#">
                Discussion
            </NavItem>
              <NavItem className='nav-item' eventKey={2} href="#">
                Workspace
            </NavItem>
              <NavItem className='nav-item' eventKey={3} href="#">
                Archives
            </NavItem>
              <NavItem className='nav-item' eventKey={4} href="#">
                Profile
            </NavItem>
              <NavItem className='nav-item' eventKey={5} href="#">
                Upload
            </NavItem>
              <NavItem>
                <Form inline onSubmit={this.handleClouds.bind(this)}>
                  <ButtonGroup required controlId="Keyword">
                    <InputGroup>
                      <FormControl
                        type="text"
                        value={this.state.keyword}
                        name="query"
                        onChange={this.handleInputChange.bind(this)}
                        style={{ width: 400 }} />
                        <InputGroup.Addon>
                        <Link to="/cloud">
                          <Glyphicon glyph="search" />
                        </Link>
                      </InputGroup.Addon>
                    </InputGroup>
                  </ButtonGroup>
                </Form>
              </NavItem>
            </Nav>
          </Navbar>
          <Route exact path="/cloud" component={Cloud} />
        </div>
      </Router>
    );
  };
}