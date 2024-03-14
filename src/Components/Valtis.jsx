import React from "react";

export const Valtis = ({ seaPlaners }) => {
    const getColorStyle = (color) => ({
        color: color,
      });
    return (
    <div>
        {seaPlaners.map((plane) => (
            <p key={plane.id} style={{ ...getColorStyle(plane.color) }}>{plane.name}</p>
          ))}
    </div>
    )
}