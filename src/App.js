import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Show from './components/Show'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to learning react and redux with Parnian</h2>
        </div>
        <div className="row">
          <div className="col-4">
            <Button />
          </div>
          <div className="col-8">
            <Show />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
