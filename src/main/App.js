import React, { Component } from 'react';
import './App.css';

import Menu from '../template/Menu';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Router />
      </div>
    );
  }
}

export default App;
