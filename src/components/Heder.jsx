import React from 'react';
import "../assets/heder.css"

export const Heder = () => {
  return (
    <div className="heder">
      <div className="nav-left">About Us</div>
      <div className="nav-right">
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
