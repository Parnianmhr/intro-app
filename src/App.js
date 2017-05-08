import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to learning react and redux with Parnian</h2>
        </div>
        <Button />
      </div>
    );
  }
}

export default App;
