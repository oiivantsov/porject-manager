import React from 'react';

const Table = ({ title, data }) => {
  return (
    <div className="dashborad-table-container">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {data.headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
