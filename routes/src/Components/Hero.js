import React, { useState, useEffect } from "react";
import "../styles/App.css";

function Hero({ match }) {
 
  //console.log(match.params.id);
  useEffect(() => {
    fetchSmartHero();
  }, []);
  const [sheroImage, setSheroImage] = useState({});
  const [sheroBio, setSheroBio] = useState({});

  const fetchSmartHero = async () => {
    console.log('***--->',process.env.REACT_APP_SUPERHERO_API_KEY)

    const imageData = await fetch(
      `http://superheroapi.com/api.php/10163089335315156/${match.params.id}/image`
    );
    
    const bioData = await fetch(
      `http://superheroapi.com/api.php/10163089335315156/${match.params.id}/biography`
    );
    const sheroBio = await bioData.json();

    const sheroImage = await imageData.json();
    //console.log("-->",sheroImage);

    setSheroImage(sheroImage)
    setSheroBio(sheroBio)

  };

  return (
    <div>
    
  <h1>{sheroBio.name}</h1>
  <img src={sheroImage.url} alt={sheroImage.url} height="400" width="400"/>

  
  </div>
  );
}

export default Hero;
