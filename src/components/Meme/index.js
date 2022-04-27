import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Header() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemeImages(data.data.memes);
        setMeme(prev => ({
          ...prev,
          randomImage: data.data.memes[0].url
        }))
      });
  }, []);

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main">
      <div className="main--input-container">
        <input
          className="main--input-field"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="main--input-field"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="main--button" onClick={getRandomImage}>
          🤪 Generate new meme 🤪
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="A meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
