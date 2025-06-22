import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="headerContainer">
      <h1 className="headerTitle">Intern Dashboard</h1>
      <div className="headerActions">
        <input
          type="search"
          className="searchInput"
          placeholder="Search interns..."
         
        />
        <button type="button" className="notifButton" >
          🔔
        </button>
      </div>
    </header>
  );
}