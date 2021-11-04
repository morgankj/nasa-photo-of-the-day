import React from "react";
import styled from 'styled-components';

const StyledImageContainer = styled.div
`   margin: 1% 3% 3%;
    padding: 1% 5%;
    background-color: ${pr => pr.theme.darkPurple};
    color: ${pr => pr.theme.lightOrange};
    border-radius: 2%;
`

const StyledPic = styled.img 
`   border-radius: 2%;
    width: 100%;
`

export default function Image(props) {
    return (
    <StyledImageContainer className='photoContainer'>
        <h3>Title: {props.imageInfo.title}</h3> 
        <p>{props.imageInfo.date}</p>
        <StyledPic src={props.imageInfo.url} className='picture' alt='Nasa pic of the day'/>
        <p><b>Photographer:</b> {props.imageInfo.copyright}</p>
        <p><b>About the photo:</b> {props.imageInfo.explanation}</p>
    </StyledImageContainer>
    )
};