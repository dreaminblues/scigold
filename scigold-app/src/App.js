import * as React from 'react';
import './App.css';
import {
  Glyphicon
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cloud from './clouds'
import $ from 'jquery';
import Detail from './detail';

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

    $('.search-container').hide();
    $('.cloud').show();

    this.setState({
      hidden: true,
    });
  }

  handleGlyphClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div className="App text-center">
          <ul className="mt-2">
            <li><a class="active" href="#home">Alexandria</a></li>
            <li><a class="active" href="#home">Discussion</a></li>
            <li><a href="#news">Workspace</a></li>
            <li><a href="#contact">archives</a></li>
            <li><a href="#about">Profile</a></li>
            <li>
              <form className="form-inline">
                <input type="text" class="form-control"></input>
                <div className="btn btn-inline">
                  <Link to="/cloud">
                    <Glyphicon glyph="search" />
                  </Link>
                </div>
              </form>
            </li>
          </ul>


          <Route exact path="/cloud" component={Cloud} />


          <div className="search-container">
            <form class="form-signin">
              <label for="inputEmail" class="sr-only">Search: </label>
              <input type="text" class="form-control"></input>
              <div className="btn btn-inline">
                <div onClick={this.handleClouds.bind(this)}>
                  <Glyphicon glyph="search" />
                </div>
              </div>
            </form>
          </div>

          <Detail></Detail>

        </div>

      </Router>
    );
  };
}
