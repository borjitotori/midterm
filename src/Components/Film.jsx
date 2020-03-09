
import React from "react";

import "./Styles.css";

const Film = props =>{
    return(
        <div sty className = "Film">
            <img onClick = {()=>props.bigPictureHandler(props.data.episode_id)} className = "image" src ={props.data.image}></img>
            <p>{props.data.name} </p>
            <p>{props.data.title}</p>
            <p>Episode: {props.data.episode_id}</p>
        </div>   
    )
    
};

export { Film as default };