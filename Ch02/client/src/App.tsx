import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message'





class App extends Component {
  // componentWillMount() {
  //   // Call this to ensure it is executed prior to rendering
  //   console.log('Almost there...')
  // }

  // componentDidMount() {
  //   console.log('hello')
  // }

  // let firstValue: string = "kathleen";
  // let firstValue: number = 21;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [1,2,3];
  // let firstValue: Array<string> = ['hey', 'bye'];

  // Tuple - an array which can contain multiple types
  // let aTuple: [string, number] = ["Kathleen", 10];

  // Enum - Similar to objects, stores multiple and can be initialized inside
  // enum Codes {first = 1, second = 2};

  // Any - unsure what type of data
  // let firstName: any = 10;

  // Void - Void a return type or function
  // const warning = (): void => {
  //   console.log('Warning');
  // }

  render() {
    return (
  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message />
        </header>
      </div>
    );
  }
  
}

export default App;
