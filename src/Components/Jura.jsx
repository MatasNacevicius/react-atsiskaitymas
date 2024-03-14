import React from "react";
import { Valtis } from "./Valtis";
import { Laivas } from "./Laivas";
import { Sala } from "./Sala";

export const Jura = ({ seaPlaners }) => {
    const juroje = []
    const valtyje =[]
    const laive = []
    const saloje = []

    seaPlaners.map((plane) =>{
        if (plane.type === "man"){
            valtyje.push(plane)
        } else if (plane.type === "car"){
            laive.push(plane)
        } else if (plane.type === "animal"){
            saloje.push(plane)
        } else {
            juroje.push(plane)
        }
    })
    const getColorStyle = (color) => ({
        color: color,
      });

    return (
    <div style={{display: "flex", margin: "10px" }}>
        <div>
        <h1 style={{ margin: "10px"}}>Jura</h1>
        {juroje.map((plane) => (
            <p key={plane.id} style={{ ...getColorStyle(plane.color) }}>{plane.name}</p>
        ))}
        </div>
        <div>
        <h1 style={{ margin: "10px"}}>Valtis</h1>
            <Valtis seaPlaners={valtyje}/>
        </div>
        <div>
        <h1 style={{ margin: "10px"}}>Laivas</h1>
            <Laivas seaPlaners={laive}/>
        </div>
        <div>
        <h1 style={{ margin: "10px"}}>Sala</h1>
            <Sala seaPlaners={saloje}/>
        </div>
    </div>
    )
}