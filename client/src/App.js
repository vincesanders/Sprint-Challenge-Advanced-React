import React from 'react';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import useDarkMode from './hooks/useDarkMode';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <Navbar toggleMode={toggleMode} darkMode={darkMode} />
      <CardContainer />
    </div>
  );
}

export default App;
