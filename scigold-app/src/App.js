import React, { Component } from 'react';
import './App.css';
import { Clouds } from './clouds';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Alexandria</h1>
        </header>

        <div className="inputs">

          <label for='' className='input-label'>Search: </label>
          <input type='text' className='text-input' placeholder='Search...'></input>

          <br />
          <label for='' className='input-label'>Upload: </label>
          <input type='file' className='file-input'></input>

        </div>

      </div>
    );
  }
}

export default App;
