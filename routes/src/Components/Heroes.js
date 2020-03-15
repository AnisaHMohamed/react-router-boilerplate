import React, { useState, useEffect } from 'react';
import '../styles/App.css'

function Heroes() {
  
  useEffect(()=>{
    fetchSmartHeroes();
  },[]);

    const [sheroes, setSheroes] = useState([]);
    const fetchSmartHeroes = async () => {
      const data = await fetch('http://superheroapi.com/api.php/10163089335315156/search/woman');
    
    const sheroes = await data.json();
    
    console.log(sheroes.results);
    setSheroes(sheroes.results)
  }

  return (
    <div>   
        <h1>Super Women</h1>
        {sheroes.map( shero => (
          <div key={shero.id}>
          <h1>{shero.name}</h1>
          <img src={shero.image.url} alt="Smiley face" height="42" width="42"/>

          
          </div>

        ))}
    </div>
  );
}

export default Heroes;
