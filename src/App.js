import React, { Component } from 'react';
import Diagram from './Diagram';
import './App.css';

const data = [10, 2, 2, 34];

class App extends Component {

  render() {
    return (
      <div className="App">
        <Diagram data={ data } size={ [500, 500] }/>
      </div>
    );
  }

}

export default App;
