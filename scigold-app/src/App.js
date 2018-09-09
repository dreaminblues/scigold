import * as React from 'react';
import './App.css';
import {
  Glyphicon
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cloud from './clouds'
import $ from 'jquery';
import Detail from './detail';
import logoSrc from "./logo.png";

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
    $('.logo').hide();
    $('.app-outer').css({
      display: 'block',
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
            <li><a href="/">Alexandria</a></li>
            <li><a href="/">Discussion</a></li>
            <li><a href="/">Workspace</a></li>
            <li><a href="/">Archives</a></li>
            <li><a href="/">Profile</a></li>
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

            <h1>
              Access. Collaborate. Innovate.
            </h1>

            <div className='logo'>
              <img src={logoSrc} style={{ width: '30%', position: 'absolute', top: '50%', left: '35%' }}></img>
            </div>
            <form className="form-inline">
              <input type="text" className="form-control" id="search-input" placeholder="Search Alexandria"></input>
              <div className="btn btn-inline">
                <div onClick={this.handleClouds.bind(this)}>
                  <Glyphicon glyph="search" />
                </div>
              </div>
            </form>
          </div>

          <Detail></Detail>
          <Cloud></Cloud>

        </div>

      </Router>
    );
  };
}
