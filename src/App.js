import React from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   beginning: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    //   tiles : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  // }
  }
  render() {
    return (
      <div className="App container">
        <Header />
        <Buttons />
        <Board />
      </div>
    );
  }
}

export default App;
