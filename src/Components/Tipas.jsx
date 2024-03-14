import React from 'react';

const Tipas = ({ seaPlaners }) => {
  const getColorStyle = (color) => ({
    color: color,
  });

  const sortedSeaPlaners = [...seaPlaners];

  sortedSeaPlaners.sort((a, b) => a.type.localeCompare(b.type));

  return (
    <div className="table-container">
        <h1>Pagal tipa</h1>
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
          {sortedSeaPlaners.map((plane) => (
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

export default Tipas;
