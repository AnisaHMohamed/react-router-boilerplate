import React, { useState, useEffect } from "react";
import "../styles/App.css";

function Hero({ match }) {
  useEffect(() => {
    fetchSmartHero();
  }, []);
  
  const [sheroImage, setSheroImage] = useState({});
  const [sheroBio, setSheroBio] = useState({});

  const fetchSmartHero = async () => {
    const imageData = await fetch(
      `http://superheroapi.com/api.php/10163089335315156/${match.params.id}/image`
    );
    const bioData = await fetch(
      `http://superheroapi.com/api.php/10163089335315156/${match.params.id}/biography`
    );
    const sheroBio = await bioData.json();
    const sheroImage = await imageData.json();

    setSheroImage(sheroImage);
    setSheroBio(sheroBio);
  };

  return (
    <div>
      <h1>{sheroBio.name}</h1>
      <img src={sheroImage.url} alt={sheroImage.url} height="400" width="400" />
      <h1>{sheroBio.publisher}</h1>
    </div>
  );
}

export default Hero;
