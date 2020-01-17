import React from 'react';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar toggleMode={toggleMode} darkMode={darkMode} />
      <CardContainer />
    </div>
  );
}

export default App;
