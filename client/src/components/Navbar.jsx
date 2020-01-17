import React from 'react';

const Navbar = ({darkMode, toggleMode}) => {
  return (
    <nav className="navbar">
      <h1>Women's World Cup Players Ranked by Search Interest</h1>
      <p>June - July 2019</p>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid="toggle-button"
        />
      </div>
    </nav>
  );
};

export default Navbar;
