
import React from "react";

import "./Styles.css";
import Film from "./Film"
import BigFilm from "./BigFilm"

const Films = props =>{
        return(
            
            <div className = "Films">

                <div className = "aloneones">
                    {props.data.results.map(element => {
                        return(  <Film bigPictureHandler = {props.bigPictureHandler} key = {element.name} data = {element} ></Film>);
                    })
                    }
                </div>
                {props.data.info.bigPicture===0 ? null : <BigFilm bigPictureHandler = {props.bigPictureHandler} 
                        smallPicturehandler = {props.smallPicturehandler}         
                        data = {props.data.results[props.data.info.bigPicture-1]} ></BigFilm>
                }            
            
                
            </div>

        )    
};

export { Films as default };