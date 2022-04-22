import React, { useState } from "react";
import "./styles.css";
import memesData from "./memesData";

export default function Header() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });
  const [allMemeImages, setAllMemeImages] = useState([...memesData.data.memes])

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url
    setMeme(prev => ({
      ...prev,
      randomImage: url
    }));
  }

  return (
    <main className="main">
      <div className="main--input-container">
        <input className="main--input-field" />
        <input className="main--input-field" />
        <button className="main--button" onClick={getRandomImage}>
          🤪 Generate new meme 🤪
        </button>
      </div>
      <img className="main--meme" src={meme.randomImage} alt="A meme"/>
    </main>
  );
}
