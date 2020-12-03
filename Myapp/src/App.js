import './App.css';
import React,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import CardRow from './components/layout/CardRow';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardRow/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
