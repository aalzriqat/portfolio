import React from "react";
import IMAGES from "../data/images";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Gallary =() =>{
    return(
        <div>
            {IMAGES.map(imageObject =>{
                return <Image key={imageObject.id} src={imageObject.image} desc={imageObject.description}/>
            })}
        </div>
    );
}

const Image = ({src, desc}) => {
    
    return(
        <div className="gallary">
            <a target="_blank" rel="noreferrer" href={src}>
            <ImageShadow src={src}/>
            </a>
        <p>description</p>
        </div>
    )
}

export default Gallary;