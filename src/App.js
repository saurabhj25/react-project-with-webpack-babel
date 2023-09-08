import React from 'react';
import './index.css';
import logo192 from './logo192.png';
import TestComponent from './Components/TestComponent/index';

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Hey Developer!</h1>
      <img src={logo192} alt="logo" style={{ width: 300, height: 300 }} />
      <TestComponent testTitle="Testing purpose" />
    </div>
  );
};
export default App;
