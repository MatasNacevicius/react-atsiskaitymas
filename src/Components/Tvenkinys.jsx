import React from "react";
import { Daiktas } from './Daiktas';

export const Tvenkinys = ({ seaPlaners }) => {
    const poriniai = []
    const neporiniai = []

    seaPlaners.map((plane) =>{
        if (plane.id % 2 === 0){
            poriniai.push(plane)
        } else{
            neporiniai.push(plane)
        }
    })
    return (
    <div style={{display: "flex", margin: "10px" }}>
        <div>
            <h1 style={{ margin: "10px"}}>Poriniai</h1>
            <Daiktas seaPlaners={poriniai}/>
        </div>
        <div>
            <h1 style={{ margin: "10px"}}>Neporiniai</h1>
            <Daiktas seaPlaners={neporiniai}/>
        </div>
    </div>
    )
}