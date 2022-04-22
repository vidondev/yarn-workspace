import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from '@3hk/common'
import { Panel } from '@3hk/uikit'


function App() {
  return (
    <div className="App">
      <HelloWorld name="React" />
      <Panel name="Panel" content='Panel Body' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
