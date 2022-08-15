import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponents from './FunctionalComponents';
import './App.css';

let count =  1 // bad practice to declasre it outside
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            components go here.
            <br />
            <FunctionalComponents passCount={count}/>
            <ClassComponent count={count}/> 
        </header>
      </div>
    );
  }
}

export default App;
