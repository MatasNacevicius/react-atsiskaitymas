import React from "react";

export const Daiktas = ({ seaPlaners }) => {
    const getColorStyle = (color) => ({
        color: color,
      });
    return (
    <div>
        {seaPlaners.map((plane) => (
            <div key={plane.id} style={{ ...getColorStyle(plane.color) }}>{plane.name}</div>
          ))}
    </div>
    )
}