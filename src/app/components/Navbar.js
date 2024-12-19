'use client'

import { useState } from 'react';

export default function Navbar({ noNav = false }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Title */}
      <div className="navbar-title">My App</div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Hamburger Icon */}
          {!noNav &&
            <div className="navbar-toggle" onClick={toggleNavbar}>
              {isOpen ? (
                <span className="close-icon">X</span> // Close icon when navbar is open
              ) : (
                <span className="hamburger-icon">&#9776;</span> // Hamburger icon when navbar is closed
              )}
            </div>
          }

          {!noNav &&
            <>
              <div className="navbar-menu-desktop">
                <ul>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/">Home</a></li>
                </ul>
              </div>
              <div className="navbar-search-desktop">
                <input type="text" placeholder="Search..." />
              </div>
            </>
          }

        </div>

      </nav>

      {/* Collapsible Navbar Menu */}
      {isOpen && (
        <div className="navbar-menu-mobile">
          {/* Search Input */}
          <div className="navbar-search-mobile">
            <input type="text" placeholder="Search..." />
          </div>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      )}
    </>
  );
}
