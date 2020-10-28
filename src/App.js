import React from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Buttons from './components/Buttons';

function App() {
 

    return (
      <div className="App container">
        <Header />
        <Buttons />
        <Board />
      </div>
    );
}

export default App;
