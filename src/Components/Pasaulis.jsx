import React from "react";
import Gyventojai from "./Gyventojai";

export const Pasaulis = ({ seaPlaners }) => {
    return (
    <div>
      <Gyventojai seaPlaners={seaPlaners} color="red"/>
    </div>
    )
}