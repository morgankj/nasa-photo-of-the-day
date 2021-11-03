import React, { useState, useEffect } from "react";
import "./App.css";

import { API_KEY } from './constants';
import axios from 'axios';
import Image from './components/Image';

export default function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Astronomy Photo Of The Day</h1>
      <p>See the NASA Photo of the Day below along with photo credits and details.</p>
      { nasaData ? <Image imageInfo={nasaData}/> : null }
    </div>
  );
}
