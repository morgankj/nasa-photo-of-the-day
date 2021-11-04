import React from "react";
import styled from 'styled-components';

const StyledImageContainer = styled.div
`   margin: 3% 0;
    padding: 1% 5%;
    background-color: ${pr => pr.theme.darkPurple};
    color: ${pr => pr.theme.lightOrange};
`

export default function Image(props) {
    return (
    <StyledImageContainer className='photoContainer'>
        <h3>Title: {props.imageInfo.title}</h3> 
        <p>{props.imageInfo.date}</p>
        <img src={props.imageInfo.url} className='picture' alt='Nasa pic of the day'/>
        <p>Photographer: {props.imageInfo.copyright}</p>
        <p>About the photo: {props.imageInfo.explanation}</p>
    </StyledImageContainer>
    )
};