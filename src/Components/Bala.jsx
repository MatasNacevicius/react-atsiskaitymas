import React from 'react';

const Bala = ({ seaPlaners }) => {
  const getColorStyle = (color) => ({
    color: color,
  });

  return (
    <div className="table-container">
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
          {seaPlaners.map((plane) => (
            <tr key={plane.id}>
              <td>{plane.id}</td>
              <td style={{ ...getColorStyle(plane.color) }}>{plane.name}</td>
              <td>{plane.type}</td>
              <td>{plane.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bala;
