import React, { useState, useEffect } from "react";
import "./App.css";

import { API_KEY } from './constants';
import axios from 'axios';
import Image from './components/Image';
import styled from 'styled-components';

const StyledHeader = styled.h1 
` color: ${pr => pr.theme.darkOrange};
  font-size: 3rem;
  margin-bottom: 1%;
`

const StyledSubHeader = styled.p 
` color: ${pr => pr.theme.darkPurple};
  margin-top: 0;
`

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
      <StyledHeader>Astronomy Photo Of The Day</StyledHeader>
      <StyledSubHeader>See the NASA Photo of the Day below along with photo credits and details.</StyledSubHeader>
      { nasaData ? <Image imageInfo={nasaData}/> : null }
    </div>
  );
}