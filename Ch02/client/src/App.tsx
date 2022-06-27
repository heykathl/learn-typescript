import React from 'react';
import logo from './logo.svg';
import './App.css';
import { stringify } from 'querystring';

function App() {

  // let firstValue: string = "kathleen";
  // let firstValue: number = 21;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [1,2,3];
  let firstValue: Array<string> = ['hey', 'bye'];

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
