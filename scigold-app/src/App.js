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

  // handleInputChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  handleGlyphClick(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Router>
        <div className="App text-center">
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li>
              <Form inline onSubmit={this.handleClouds.bind(this)}>
                <div class="input-group mb-3">
                  <input type="text" class="form-control"></input>
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                    <Link to="/cloud">
                        <Glyphicon glyph="search" />
                      </Link></span>
                  </div>
                </div>
              </Form>
            </li>
          </ul>
          <Route exact path="/cloud" component={Cloud} />
        </div>
      </Router>
    );
  };
}