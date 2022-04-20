import React from "react";
import "./styles.css";

export default function Header() {
   function handleClick() {
      console.log("swag");
   }

  return (
    <main className="main">
      <div className="main--input-container">
        <input className="main--input-field" />
        <input className="main--input-field" />
      </div>
      <button className="main--button" onClick={handleClick}>🤪 Generate new meme 🤪</button>
      <div className="main--meme-container">
        <img className="main--meme" />
      </div>
    </main>
  );
}
