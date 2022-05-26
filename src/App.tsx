import React from 'react';
import './App.css';
// import Coordinate from './components/Coordinate';
// import CounterApp from './components/CounterApp';
import HookCoordinate from './components/HookCoordinate';
import HookCounter from './components/HookCounter';
import HookDataFatch from './components/HookDataFatch';

function App() {
  return (
    <div className="App">
      {/* <CounterApp />
      <hr />
      <Coordinate />
      <hr /> */}
      <HookCounter />
      <hr />
      <HookCoordinate />
      <hr />
      <HookDataFatch />
    </div>
  );
}

export default App;
