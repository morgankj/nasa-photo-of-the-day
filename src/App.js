import React, { useState, useEffect } from "react";
import "./App.css";

import { API_KEY } from './constants';
import axios from 'axios';
import Image from './components/Image';
import styled from 'styled-components';
import logo from './images/nasa_logo.png';

const HeaderLine = styled.div 
` display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

const StyledLogo = styled.img 
` width: 10%;
  margin-right: .5%;
`

const StyledHeader = styled.h1 
` color: ${pr => pr.theme.darkOrange};
  font-size: 3rem;
  margin: 0;
  margin-top: 3%;
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
      <HeaderLine>
        <StyledLogo src={logo} alt=""/> 
        <div>
          <StyledHeader>Astronomy Photo Of The Day</StyledHeader>
          <StyledSubHeader>See the NASA Photo of the Day below along with photo credits and details.</StyledSubHeader>
        </div>
      </HeaderLine>
      { nasaData ? <Image imageInfo={nasaData}/> : null }
    </div>
  );
}