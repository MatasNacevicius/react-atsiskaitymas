import React from 'react';

const Gyventojai = ({ seaPlaners, color }) => {
  const getColorStyle = (color) => ({
    color: color,
  });

  const hasColor = seaPlaners.some((plane) => plane.color === color);

  return (
    <div className="table-container">
        <h1>atvaizduoja pagal tevinio spalva</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {hasColor ? (
            seaPlaners.map((plane) => (
              (color === plane.color || !color) && (
                <tr key={plane.id}>
                  <td>{plane.id}</td>
                  <td style={{ ...getColorStyle(plane.color) }}>{plane.name}</td>
                  <td>{plane.type}</td>
                  <td>{plane.color}</td>
                </tr>
              )
            ))
          ) : (
            seaPlaners.map((plane) => (
              <tr key={plane.id}>
                <td>{plane.id}</td>
                <td style={{ ...getColorStyle(plane.color) }}>{plane.name}</td>
                <td>{plane.type}</td>
                <td>{plane.color}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Gyventojai;
