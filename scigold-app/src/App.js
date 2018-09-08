import * as React from 'react';
import './App.css';
import {
  Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, ControlLabel, FormControl,
  Form,
  FormGroup,
  InputGroup,
  LoadingSpinner, Glyphicon, SearchIcon
} from 'react-bootstrap';
import { Clouds } from './clouds'

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
            <NavItem eventKey={5} href="#">
              Upload
            </NavItem>
          </Nav>
        </Navbar>

        <div hidden={!this.state.hidden}>
          <Form inline onSubmit={this.handleClouds.bind(this)}>
            <FormGroup required controlId="Keword">
              <FormControl type="text" value={this.state.keyword}
                name="query" onChange={this.handleInputChange.bind(this)}
                style={{ width: 400 }} />
            </FormGroup>
            <div><p /></div>
            <InputGroup>
              <Button bsStyle="primary" type="submit" aria-label="Search" title="Search">
                <Glyphicon glyph="search" aria-hidden="true" /> Search
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div hidden={this.state.hidden}>
          <Clouds keyword={this.state.keyword} />
        </div>
      </div>
    );
  };
}