import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloFlavio from './components/HelloFlavio/HelloFlavio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld>It's a pleasure to meet you!</HelloWorld>
        <HelloFlavio>Hello you handsome devil! ;)</HelloFlavio>
      </header>
    </div>
  );
}

export default App;
