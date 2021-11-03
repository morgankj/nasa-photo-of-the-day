import React from "react";

export default function Image(props) {
    return (
    <div className='photoContainer'>
        <h3>Title: {props.imageInfo.title}</h3> 
        <p>{props.imageInfo.date}</p>
        <img src={props.imageInfo.url} className='picture' alt='Nasa pic of the day'/>
        <p>Photographer: {props.imageInfo.copyright}</p>
        <p>About the photo: {props.imageInfo.explanation}</p>
    </div>
    )
};