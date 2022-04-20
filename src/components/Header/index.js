import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header--logo-wrapper">
        <img src="/images/troll-face.png" alt="Troll face" className="header--img"/>
        <h3 className="header--title">Meme Generator</h3>
      </div>
      <h4 className="header--subtitle">React Course - Project 3</h4>
    </header>
  );
}
