import React from "react";
import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";

export const Vandenynas = ({ seaPlaners }) => {
    return (
    <div>
        <Spalva seaPlaners={seaPlaners}/>
        <Tipas seaPlaners={seaPlaners}/>
        <Vardas seaPlaners={seaPlaners}/>
    </div>
    )
}