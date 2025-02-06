import React from 'react';
import "../assets/content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="about-us">
        <h1>About Us</h1>
        <p>We are a team dedicated to providing the best services.</p>
      </div>
      {/* <div className="user-info">
        <h1>Name: Mir Mujtabarza</h1>
        <h2>Age: 20</h2>
        <h2>Active: Not Active</h2>
        <h2>Environment is Sunny: No</h2>
      </div> */}
      <div className="image-container">
        <img src="src/aboutUs.jpg" alt="About Us" />
      </div>
    </div>
  );
}
